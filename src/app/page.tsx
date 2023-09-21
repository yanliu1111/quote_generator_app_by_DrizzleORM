import Quote from './components/Quote';
import getRandomQuote from '@/lib/getRandomQuote';

export default async function Home() {
  const randomQuote = await getRandomQuote();
  return <Quote {...randomQuote} />;
}
// THE HOME PAGE is the server page, the quote component itself is going to be the client page, the user can refresh the page whenever they want to, it has some interaction right there that they are taking. But the rest of this, you get the random quote this is going to be servers side rendered, and then the user can interact with the quote component itself. So that's the difference between the two. So it's issuing this request from the server which is also a good discussion because we did create API routes but you dont want to set up your server component to request from your API route in the same NEXT app, because whatever data the server component requests need to be available at build time and it cannot be avaiable if you're also building your routes at the same time. So you want to make sure that you're not requesting from your API routes in your server components. You could request from an API route in your client components, but not in your server components, that would cause a build error.
