import { authors, categories, quotes } from '@/db/schema';

import React from 'react';
import { config } from '@/db/config';
import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { eq } from 'drizzle-orm';

//rfc

export default async function getAllQuotes(): Promise<Quote[]> {
  const conn = connect(config);
  const db = drizzle(conn);

  const results: Quote[] = await db
    .select({
      quote: quotes.quote,
      author: authors.author,
      category: categories.categories,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

  return results;
}
