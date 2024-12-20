//import React from 'react'

export default function Products() {
  const data = [
    {country:"india",location:"taj mahal",img:'https://www.euroschoolindia.com/wp-content/uploads/2024/05/wonders-of-the-world.webp'}
  ];

  // () => ()
 
  return <div>
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">country</th>
      <th scope="col">location</th>
      <th scope="col">name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>india</td>
      <td>delhi</td>
      <td>taj mahal</td>
    </tr>
   
   </tbody>
  </table>
  <img src="https://www.euroschoolindia.com/wp-content/uploads/2024/05/wonders-of-the-world.webp"/>
    </div>;
}
