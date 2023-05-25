<script>
// @ts-nocheck
    import { imgsArray, imgsArrayMob } from '../BoundComponents/myStores';



    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/sea-green';
   
</script>

<div class="mx-auto sm:max-w-[800px] mb-10">
    <p class="text-3xl p-4 italic font-bold">Projects</p>
    <div class="w-10 border-4 border-yellow-500"></div>
</div>


<div class="flex flex-col mx-auto sm:max-w-[800px] justify-center items-center gap-5">

    <div class="">
        <a href="https://modern-spa-ourthesis.netlify.app/" target="blank" class="w-full font-bold underline text-blue-300 italic">ICCT Colleges Enrollment System Design and Implementation for Incoming Students for the Year 2023</a>
    </div>

    <Splide aria-label="PC view"
    options={ {
        autoplay:true,
        rewind: true,
        width : 800,
        gap   : '1rem',
    } }


    >
    {#each $imgsArray as value}
            <SplideSlide>
                <img src={value} alt="loading" /> 
            </SplideSlide>
        {/each}
    </Splide>


    <Splide aria-label="PC view"
    options={ {
        autoplay:true,
        rewind: true,
        width : 800,
        gap   : '1rem',
    } }


    >
    {#each $imgsArrayMob as value}
            <SplideSlide>
                <img src={value} alt="loading" class="mx-auto"/> 
            </SplideSlide>
        {/each}
    </Splide>

    
</div>

