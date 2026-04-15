import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    // Check authentication
    const adminSession = request.cookies.get('admin_session')?.value;

    if (!adminSession) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify session
    try {
      const sessionData = JSON.parse(adminSession);
      if (!sessionData.email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      // Check if user is authorized
      const authorizedEmails = [
        'arturo.rodriguez@uleam.edu.ec',
        'jhonny.villafuerte@uleam.edu.ec'
      ];

      if (!authorizedEmails.includes(sessionData.email)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    } catch {
      return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
    }

    // Get filename from params
    const filename = params.filename;
    const filePath = path.join(process.cwd(), 'public', 'admin-assets', filename);

    // Security: prevent directory traversal
    if (!filePath.includes('admin-assets') || !existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Read file
    const fileBuffer = await readFile(filePath);

    // Determine content type
    const contentType = filename.endsWith('.pdf') ? 'application/pdf' : 'application/octet-stream';

    // Return file
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error serving file:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
