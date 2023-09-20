import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, int, varchar, index } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const authors = mysqlTable("authors", {
	id: int("id").autoincrement().notNull(),
	author: varchar("author", { length: 255 }).notNull(),
},
(table) => {
	return {
		authorsId: primaryKey(table.id),
		author: unique("author").on(table.author),
	}
});

export const categories = mysqlTable("categories", {
	id: int("id").autoincrement().notNull(),
	categories: varchar("categories", { length: 255 }).notNull(),
},
(table) => {
	return {
		categoriesId: primaryKey(table.id),
		categories: unique("categories").on(table.categories),
	}
});

export const quotes = mysqlTable("quotes", {
	id: int("id").autoincrement().notNull(),
	quote: varchar("quote", { length: 255 }).notNull(),
	authorId: int("author_id").notNull(),
	categoryId: int("category_id").notNull(),
},
(table) => {
	return {
		authorIdIdx: index("author_id_idx").on(table.authorId),
		categoryIdIdx: index("category_id_idx").on(table.categoryId),
		quotesId: primaryKey(table.id),
		quote: unique("quote").on(table.quote),
	}
});