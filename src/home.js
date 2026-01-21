export const Home = (() => {
      const reset = () => {
        const container = document.querySelector("#content");
        const htmlString = ``;
    };

    const loadHome = () => {
         const container = document.querySelector("#content");
            const htmlString = `<header style=''>
           <div style='display:flex; justify-content:flex-end; gap:2.3rem; padding:20px; background:#0E131F;'>
            <button style="padding:0.5rem 1rem; border-radius:10px; border:none;" >Features</button>
            <button style="padding:0.5rem 1rem; border-radius:10px; border:none;" >Pricing</button>
            <button style="padding:0.5rem 1rem; border-radius:10px; border:none;">FAQ</button>
            <button style="padding:0.5rem 1rem; border-radius:10px; border:none;">Login</button> 
            </div> 
            </header>
            <!--main section-->
            <section>
            <div style="display:flex; flex-direction:row; width:100%; align-items:center; justify-content:center; height:80vh; gap:1rem; color:white; text-align:center;">
            <div style = "flex-basis:55%; height:25rem;">
            <img style="object-fit:cover; width:100%; height:100%; border-radius:10px;" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80">
            </div>
            <div style="flex-basis:35%; line-height:1.5; ">
              <h1>Eating Well
        <br>Never Tasted So
         <br>Good
      </h1>
        <p style="margin-top:1rem; line-height:1.5; font-size:1rem;">Choose your health with millions of delicious <br> possibilities made from simple whole ingredients.</p>
      <div style ="display:flex; justify-content:center; gap:1rem; margin-top:1.5rem;">
        <button style ="display:inline-flex ; color:white; background:blue; border:0; padding:0.5rem 1rem; border-radius:5px; font-size:1rem;">Order Now</button>
        <button style ="display:inline-flex ; color:#333; background:#e0e0e0; border:0; padding:0.5rem 1rem; border-radius:5px; font-size:1rem;">Learn more</button>
      </div>
            </div>

            </div>
            </section>
            `;
            container.innerHTML = htmlString;
    };

    const loadAbout = () => {
        const container = document.querySelector("#content");
        const htmlString = `
        <section style="color:#333; background:#f0f0f0; padding:2rem;">
        <div style="display:flex; width:100%; justify-content:center; align-items:center; gap:2rem; flex-direction:column;">
        <div style="flex-basis:55%; text-align:center;">
        <h1 style="font-size:1.875rem; margin-bottom:1rem; font-weight:500; color: rgb(17 24 39);">About Us
        <br>Our core values and story from the start
        </h1>
        <p>
        At MyOdin Restaurant, we believe that food is more than just sustenance; it's an experience that brings people together. Our journey began with a simple idea: to create a dining destination that combines exceptional cuisine with a warm and welcoming atmosphere. From our humble beginnings, we've grown into a beloved establishment known for our commitment to quality, creativity, and community. Our team of passionate chefs and staff work tirelessly to craft dishes that not only delight the palate but also tell a story. We source the freshest ingredients, embrace culinary innovation, and prioritize sustainability in everything we do. Join us as we continue to share our love for food and hospitality with every guest who walks through our doors.
        </p>
        </div>
        </div>
        </section>
        `;
        container.innerHTML = htmlString;
    };
    
    return{
        reset,
        loadHome,
        loadAbout,
    };
})();