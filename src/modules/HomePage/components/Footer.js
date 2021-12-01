// import React from 'react';

// function Footer() {
//     return (
//         <>
//           <div>
//               <div>
//                   <h1>No copyright deserverd.It made for educational purpuses.
//                  Developed by S.M.Abtahi Noor</h1>
//               </div>
//           </div>
//         </>
//     );
// }

// export default Footer;

import React from "react";

export default function Footer() {
  return (
    <footer className="ml-20 p-6 bg-coolGray-100 text-coolGray-800">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Support</h2>
          <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
            <a href="#">Help Center </a>
            <a href="#">Safety information </a>
            <a href="#">Cancellation options </a>
            <a href="#">Our COVID-19 Response </a>
            <a href="#">Supporting people with disabilities </a>
            <a href="#">Report a neighborhood concern </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
            <a href="#">Airbnb.org: disaster relief housing </a>
            <a href="#">Support Afghan refugees </a>
            <a href="#">Celebrating diversity & belonging</a>
            <a href="#">Combating discrimination</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Hosting</h2>
          <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
            <a href="#">Try hosting </a>
            <a href="#">AirCover: protection for Hosts</a>
            <a href="#">Explore hosting resources </a>
            <a href="#">Visit our community forum </a>
            <a href="#">How to host responsibly</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">About</h2>
          <div className="flex flex-col space-y-2 text-sm text-coolGray-600">
            <a href="#">Newsroom </a>
            <a href="#">Learn about new features </a>
            <a href="#">Letter from our founders </a>
            <a href="#">Careers </a>
            <a href="#">Investors </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="text-coolGray-600">© 2021 Airbnb, Inc.</span>
      </div>
    </footer>
  );
}
