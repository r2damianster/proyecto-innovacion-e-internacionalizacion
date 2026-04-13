import PocketBase from 'pocketbase';
import type { Member, Publication, VideoCategory, Video, News, Activity, SiteSettings } from '@/types';

const PB_URL = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

export type { Member, Publication, VideoCategory, Video, News, Activity, SiteSettings };

export const pb = new PocketBase(PB_URL);

// Auth helpers
export const isAdmin = () => {
  return pb.authStore.isValid && pb.authStore.model?.email !== undefined;
};

export const login = async (email: string, password: string) => {
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
    return authData;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const logout = () => {
  pb.authStore.clear();
};

// Data fetching helpers
export const getMembers = async () => {
  const records = await pb.collection('members').getFullList({
    sort: 'order',
  });
  return records;
};

export const getPublications = async () => {
  const records = await pb.collection('publications').getFullList({
    sort: '-publication_date',
  });
  return records;
};

export const getVideoCategories = async () => {
  const records = await pb.collection('video_categories').getFullList({
    sort: 'order',
    filter: 'is_active = true',
  });
  return records;
};

export const getVideos = async (categoryId?: string) => {
  const filter = categoryId ? `category = "${categoryId}"` : undefined;
  const records = await pb.collection('videos').getFullList({
    sort: 'order',
    filter,
    expand: 'category',
  });
  return records;
};

export const getFeaturedVideos = async () => {
  const records = await pb.collection('videos').getList(1, 6, {
    filter: 'is_featured = true',
    sort: 'order',
    expand: 'category',
  });
  return records.items;
};

export const getNews = async () => {
  const records = await pb.collection('news').getFullList({
    sort: '-published_date',
  });
  return records;
};

export const getActivities = async () => {
  const records = await pb.collection('activities').getFullList({
    sort: '-event_date',
  });
  return records;
};

export const getSiteSettings = async () => {
  const records = await pb.collection('site_settings').getFullList();
  return records;
};
