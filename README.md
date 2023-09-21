# Build a Quote Generator App with Nextjs, PlanetScale MySQL, & Drizzle ORM

## Application Introduction

Build a random quote generator app with Nextjs, PlanetScale MySQL, & Drizzle ORM. Learn from [this tutorial](https://www.youtube.com/watch?v=d7XJjQesDtE&t=1565s&ab_channel=DaveGray), set up a MySQL database on PlanetScale, connect to and query the database with Drizzle ORM, and build a Next.js frontend and API routes.

## ⚙Tech Stacks

🔗 Nextjs <br>
🔗 PlanetScale MySQL <br>
🔗 [Drizzle ORM](https://orm.drizzle.team/) <br>

## 📚Tech Notes:

1. PlanetScale MySQL <br>
   [PlanetScale](https://planetscale.com/) is the advanced serverless MySQL Platform
   (credit card info needed to sign up 🤨, that's why I like [supabase](https://supabase.com/) and [clever-cloud](https://www.clever-cloud.com/) database 👈 Highly recommend! )

   Also, planetscale doesn't support foreign key constrainst, it used ex: `KEY category_id_idx (category_id)` instead in relation table ex: products table.

**setting** in planetscale plateform: <br>
✅ Choose Mysql language<br>
✅ Require administrator approval for deploy requests<br>
✅ Restrict branch regions<br>
✅ Allow web console access to production branches<br>
❌ Automatically copy migration data<br>
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

2. Dizzle ORM <br>

- [Drizzle ORM](https://orm.drizzle.team/) is a lightweight, promise-based ORM for Node.js, written in TypeScript and inspired by Sequelize. Check `schema.ts` file for more details.
- Import drizzle is called infer model to get the type. Create `types.d.ts` file.

3. Multi-case cursor preserve that allows you to select one then press CtrlD to select the next one. It also can keeps one lowercase and other one in uppercase. Ex: username in `username: process.env.DATABASE_USERNAME`

4. api
   `localhost:3000/api/quotes` <br>
   `localhost:3000/api/randomquote` <br>
5. Client side vs Server side explained when creating page.tsx. `page.tsx` is a server side rendered page, so it's going to be rendered on the server, and then sent to the client. <br>
   **You could request from an API route in your client components, but not in your server components. <br>**
   The home PAGE is the server page, the quote component itself is going to be the client page, the user can refresh the page whenever they want to, it has some interaction right there that they are taking. But the rest of this, you get the random quote this is going to be servers side rendered, and then the user can interact with the quote component itself. So that's the difference between the two. So it's issuing this request from the server which is also a good discussion because we did create API routes but you dont want to set up your server component to request from your API route in the same NEXT app, because whatever data the server component requests need to be available at build time and it cannot be avaiable if you're also building your routes at the same time. So you want to make sure that you're not requesting from your API routes in your server components. You could request from an API route in your client components, but not in your server components, that would cause a build error.
6. router.refresh(): Refresh the current route. Making a new request to the server, re-fetching data requests, and re-rendering Server Components. The client will merge the update React Server Component payload without losing unaffected client-side React (e.g. useState) or browser state (e.g. scroll position).

In `Quote.tsx` component:Beside the logic of fade, not much new. We are using the same data pasing in the random quote that we get from the parent server component that is an SSR Server side render and essentially just passes it into that quote component that we have in `page.tsx`.
