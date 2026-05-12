import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export const ADMIN_UID = 'pIFm9czS7kfQD5TJQHm4HH6q42p2';
const COLLECTION = 'review';

function docToReview(d) {
  const data = d.data();
  return {
    id: d.id,
    userId: data.userId,
    name: data.name,
    rating: Number(data.rating) || 5,
    comment: data.comment || '',
    createdAt: data.createdAt || null,
  };
}

export async function fetchLatestReviews(n = 3) {
  const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'), limit(n));
  const snap = await getDocs(q);
  return snap.docs.map(docToReview);
}

export async function fetchAllReviewsPage({ pageSize = 50, cursor = null } = {}) {
  const base = [collection(db, COLLECTION), orderBy('createdAt', 'desc')];
  const q = cursor
    ? query(...base, startAfter(cursor), limit(pageSize))
    : query(...base, limit(pageSize));
  const snap = await getDocs(q);
  const items = snap.docs.map(docToReview);
  const lastDoc = snap.docs[snap.docs.length - 1] || null;
  return { items, cursor: lastDoc, done: snap.docs.length < pageSize };
}

export async function submitReview({ user, rating, comment }) {
  if (!user) throw new Error('No autenticado');
  const payload = {
    userId: user.uid,
    name: user.displayName || user.email,
    rating: Number(rating),
    comment: String(comment).trim(),
    createdAt: new Date().toISOString(),
  };
  const ref = await addDoc(collection(db, COLLECTION), payload);
  return { id: ref.id, ...payload };
}

export async function deleteReview(docId) {
  await deleteDoc(doc(db, COLLECTION, docId));
}
