'use server';

import { revalidateTag } from 'next/cache';

export default async function revalidateCacheFromTag(collection: string) {
  revalidateTag(collection);
}
