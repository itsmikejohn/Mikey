<script>
// @ts-nocheck
    import { selectionStore, activeItem, widthDetector, showMobileMenu, heightDetector, mobNpcLogic } from "./myStores";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    //animations
    import { fly } from "svelte/transition";

    let x = 0

  

    //takes a string value from selectionStore array
    const selection = (value) => {
        activeItem.set(value)
        
        dispatch("dataDeliver", value);
    
    
    }

    //mobile burger icon
    const toggleIcon = () => {
        showMobileMenu.set(true);
        
    }
    
    //mobile and pc detection for smooth scrolling


</script>
<svelte:window bind:innerWidth={$widthDetector}  bind:scrollY={x}/>
<!--Greater than mobile screens-->
{#if $widthDetector >= 589}
    <div class="fixed  w-full  top-0 border-2 border-bg-slate-400 bg-white z-10" >
        <div class="flex gap-2 p-2 flex-row-reverse mx-10">
            {#each $selectionStore as value }
                <p class="p-4 text-xl font-bold transition-all hover:animate-pulse hover:bg-slate-200 active:scale-110 rounded-lg cursor-pointer"
                on:keydown={()=>{}}
                on:click={()=>{selection(value)}}
                class:active = {$activeItem === value}
                >{value}</p>
            {/each}
        </div>
        
    </div>
{:else}
<!--Mobile Screens-->

    <div class="fixed border-2 border-bg-slate-400 top-0 w-full bg-white z-10">
        <div class="flex flex-col gap-1 p-4 active:bg-slate-200 hover:animate-pulse hover:bg-slate-200 max-w-fit rounded-full m-2"
        on:keydown={()=>{}}
        on:click={toggleIcon}
        >
            <div class="w-6 border-2 border-black"></div>
            <div class="w-6 border-2 border-black"></div>
            <div class="w-6 border-2 border-black"></div>
        </div>
      
        {#if $showMobileMenu}
        <div class="fixed w-full bottom-0 top-0 left-0"
        on:keydown={()=>{}}
        on:click={()=>{showMobileMenu.set(false)}}
        >
            <div class="max-w-fit border-2 border-bg-slate-400 bg-white" transition:fly={{x:-80, duration:300}}>
                {#each $selectionStore as value }
                    <p class="p-4 text-xl font-bold transition-all hover:animate-pulse hover:bg-slate-200 active:scale-110 rounded-lg cursor-pointer"
                    on:keydown={()=>{}}
                    on:click={()=>{selection(value)}}
                    class:active = {$activeItem === value}
                    >{value}</p>
                {/each}
            </div>
        </div>
        {/if}
    </div>



{/if}









<style>
    .active{
        background-color: grey;
        color: white;
    }
</style>