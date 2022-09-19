import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const name = url.searchParams.get('name');
  if(name){
    return {
        name: name,
    }
  }
  
  return {
    href: '/inscripciones',
  }
}
