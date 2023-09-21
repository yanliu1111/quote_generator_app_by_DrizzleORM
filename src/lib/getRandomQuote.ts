import { authors, categories, quotes } from '@/db/schema';

import React from 'react';
import { config } from '@/db/config';
import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { eq } from 'drizzle-orm';

const prevQuoteObj = {
  prev: 1,
  setPrev: function (num: number) {
    this.prev = num;
  },
};

//rfc
export default async function getRandomQuote(): Promise<Quote> {
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

  let randomIndex = prevQuoteObj.prev;
  while (randomIndex === prevQuoteObj.prev) {
    randomIndex = Math.floor(Math.random() * results.length);
  }
  prevQuoteObj.setPrev(randomIndex);
  return results[randomIndex];
}
