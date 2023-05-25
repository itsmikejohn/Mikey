<script>
// @ts-nocheck
    import { animateScroll } from 'svelte-scrollto-element';

    import Nav from "./Components/BoundComponents/Nav.svelte";
    import Profile from "./Components/LiveComponents/Profile.svelte";
    import Knowledge from "./Components/LiveComponents/Knowledge.svelte";
    import Projects from "./Components/LiveComponents/Projects.svelte";
    import Footer from "./Components/LiveComponents/Footer.svelte";
    
    const dataCollector  =  (data) => {

        if(data.detail === "Profile"){
            animateScroll.scrollTo({element: `#${data.detail}`})
        }else if(data.detail === "Knowledge"){
            animateScroll.scrollTo({element: `#${data.detail}`})
        }else if(data.detail === "Projects"){
            animateScroll.scrollTo({element: `#${data.detail}`})
        }else if(data.detail === "Contact"){
            animateScroll.scrollTo({element: `#${data.detail}`})
        }
    }
    

    
   
</script>

<main class="scroll-smooth">
    <Nav on:dataDeliver={dataCollector}/>
    
    <div class="mt-20 p-4" id="Profile">
        <Profile />
    </div>

    <div class="mt-20 p-4" id="Knowledge">
        <Knowledge />
    </div>

    <div class="mt-20 p-4" id="Projects">
        <Projects />
    </div>

    <div class="mt-20" id="Contact">
        <Footer />
    </div>
    
</main>