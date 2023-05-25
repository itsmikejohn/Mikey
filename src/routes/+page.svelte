<script>

    import Nav from "./Components/BoundComponents/Nav.svelte";
    import Profile from "./Components/LiveComponents/Profile.svelte";
    import Knowledge from "./Components/LiveComponents/Knowledge.svelte";
    import Projects from "./Components/LiveComponents/Projects.svelte";
    import Footer from "./Components/LiveComponents/Footer.svelte";
    

    
   
</script>

<main class="scroll-smooth">
    <Nav />
    
    <div class="mt-20 p-4">
        <Profile />
    </div>

    <div class="mt-20 p-4">
        <Knowledge />
    </div>

    <div class="mt-20 p-4">
        <Projects />
    </div>

    <div class="mt-20">
        <Footer />
    </div>
    
</main>