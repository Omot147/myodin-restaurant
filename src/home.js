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
            
            </section>
            `;
            container.innerHTML = htmlString;
    };
    
    return{
        reset,
        loadHome,
    };
})();