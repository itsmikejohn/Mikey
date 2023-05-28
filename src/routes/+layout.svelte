<script>
    import "../app.css";
    import { successSendLogic, sendLogic } from "./Components/BoundComponents/myStores";
    import { fly } from "svelte/transition";

   
   
</script>

<slot />
{#if $successSendLogic}
<div class="w-full fixed bottom-0 top-0 z-10 p-2">
    <div class="bg-[#272822] max-w-fit p-10 mx-auto mt-[30vh] rounded-lg border-2 border-pink-600" transition:fly={{y:-1000, duration:1500}}>
        <p class="text-white"> Thank you for leaving me a message!!! ....... </p>
        <button class="w-full bg-blue-600 text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 p-2 mt-10" 
        on:click={() => {successSendLogic.set(false)}}
        >Ok</button>
    </div>
</div>
{/if}


{#if $sendLogic}
<div class="w-full fixed bottom-0 top-0 z-10 p-2">
    <div class="bg-[#272822] max-w-fit p-10 mx-auto mt-[30vh] rounded-lg border-2 border-pink-600" transition:fly={{y:-1000, duration:1500}}>
        <p class="text-white"> You must say something sir/maam at least greater than 4 characters ....... </p>
        <button class="w-full bg-blue-600 text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 p-2 mt-10" 
        on:click={() => {sendLogic.set(false)}}
        >Ok</button>
    </div>
</div>
{/if}

