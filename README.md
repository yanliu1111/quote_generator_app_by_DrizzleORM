# Build a Quote Generator App with Nextjs, PlanetScale MySQL, & Drizzle ORM

## Application Introduction

## Tech Stacks

✅ Nextjs
✅ PlanetScale MySQL
✅ [Drizzle ORM](https://orm.drizzle.team/)

## Tech Notes:

1. PlanetScale MySQL <br>
   [PlanetScale](https://planetscale.com/) is the advanced serverless MySQL Platform
   (credit card info needed to sign up 🤨, that's why I like [supabase](https://supabase.com/) and [clever-cloud](https://www.clever-cloud.com/) database 👈 Highly recommend! )

   Also, planetscale doesn't support foreign key constrainst, it used ex: `KEY category_id_idx (category_id)` instead in relation table ex: products table.

**setting** in planetscale plateform: <br>
✅Choose Mysql language<br>
✅Require administrator approval for deploy requests<br>
✅Restrict branch regions<br>
✅Allow web console access to production branches<br>
❌Automatically copy migration data<br>
**console** in planetscale plateform:

```sql
CREATE TABLE authors (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
author varchar (255) NOT NULL UNIQUE
);

CREATE TABLE categories(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
categories varchar (255) NOT NULL UNIQUE
);

CREATE TABLE quotes (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
quote varchar (255) NOT NULL UNIQUE,
author_id int NOT NULL,
category_id int NOT NULL,
KEY author_id_idx (author_id),
KEY category_id_idx (category_id)
);

-- after insert data, add foreign key constrainst
-- check all data
select A.author, C.categories , Q.quote
from quotes Q
inner join authors A on Q.author_id = A.id
inner join categories C on Q.category_id = C.id;
```

**Branch setting:** in planetscale plateform:<br>
✅ Promote to production<br>
✅ Enable safe migration<br>
