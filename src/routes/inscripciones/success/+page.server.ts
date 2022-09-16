import { error } from '@sveltejs/kit';
import axios from 'axios';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {

  const name = url.searchParams.get('name');
  const lastname = url.searchParams.get('lastname');
  const id = url.searchParams.get('id');
  const email = url.searchParams.get('email');
  const phone = url.searchParams.get('phone');
  const church = url.searchParams.get('church');
  const rol = url.searchParams.get('rol');

  const url1=`https://docs.google.com/forms/d/e/1FAIpQLSfvIuk5g04A-leVsMLhnT6EPFEssZ-Nu3MoeQ9ACTLXhuw4RQ/formResponse?usp=pp_url&entry.1324231860=${name}&entry.1140345976=${lastname}&entry.713162102=${id}&entry.1120201029=${email}&entry.1965274929=%2B591${phone}&entry.303483099=${church}&entry.1646020127=${rol}&submit=Submit`

  const res = await axios.get(url1);

  if (res.status === 200) {
    return {
      fullName: `${name} ${lastname}`,
      status: 200,
      body: {
        message: "success",
      },
    };
  } else {
    return {
      status: 404,
      body: {
        message: "failed",
      },
    };
  }
}