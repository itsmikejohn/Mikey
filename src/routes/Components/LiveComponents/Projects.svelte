<script>
// @ts-nocheck
    import { imgsArray, p2imgsArray} from '../BoundComponents/myStores';



    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/sea-green';
   
</script>

<div class="mx-auto sm:max-w-[800px] mb-10">
    <p class="text-3xl p-4 italic font-bold">Projects</p>
    <div class="w-10 border-4 border-yellow-500"></div>
</div>


<div class="flex flex-col mx-auto sm:max-w-[800px] justify-center items-center gap-5">

    <div class="">
        <a  href="https://modern-spa-ourthesis.netlify.app/" target="blank" class="w-full font-bold underline italic p-2">ICCT Colleges Enrollment System Design and Implementation for Incoming Students for the Year 2023</a>
    </div>

    <div class="-mt-8">
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
    </div>




    <div class="">
        <a  href="https://barangaysn3.vercel.app/" target="blank" class="w-full font-bold underline italic p-2">Barangay SN3 Appointment System</a>
    </div>

    <div class="-mt-8">
        <Splide aria-label="PC view"
        options={ {
            autoplay:true,
            rewind: true,
            width : 800,
            gap   : '1rem',
        } }


        >
        {#each $p2imgsArray as value}
                <SplideSlide>
                    <img src={value} alt="loading" /> 
                </SplideSlide>
            {/each}
        </Splide>
    </div>
    


  
    
</div>

