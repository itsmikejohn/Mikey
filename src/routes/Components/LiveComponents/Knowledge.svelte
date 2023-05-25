<script>
    import javascript from "../../Images/Knowledge/Javascript.svg";
    import go from "../../Images/Knowledge/Go.svg";
    import csharp from "../../Images/Knowledge/Csharp.svg";
    import fb from "../../Images/Knowledge/fb.svg";
    import svelte from "../../Images/Knowledge/svelte.svg";
    import tailwind from "../../Images/Knowledge/tailwind.svg";



</script>


<div class="mx-auto sm:max-w-[800px] mb-10">
    <p class="text-3xl p-4 italic font-bold">Knowledge</p>
    <div class="w-10 border-4 border-yellow-500"></div>
</div>

<div class="flex flex-col mx-auto sm:max-w-[800px] justify-center items-center gap-5"> 
    
<!--Javascript-->
    <div class="flex gap-4 items-center">
        <div class="">
            <img src={javascript} alt="loading" class="max-w-[30vw] sm:max-w-[140px]" />
        </div>
        <div class="">
            <p>JavaScript is a high-level, interpreted, and object-oriented programming language that is used to create interactive web pages. It is one of the three core technologies of the World Wide Web, along with HTML and CSS. JavaScript can be used to add dynamic behavior to web pages, such as animations, games, and interactive forms. It can also be used to access and manipulate data on the server side.</p>
        </div>
    </div>
<!--Go-->
    <div class="flex gap-4 items-center">
        <div class="">
            <img src={go} alt="loading" class="max-w-[30vw] sm:max-w-[140px]" />
        </div>
        <div class="">
            <p>Go (also known as Golang) is a concurrent, compiled, statically typed, general-purpose programming language developed by Google. It is designed to be simple, reliable, and efficient. Go is a popular language for developing web applications, microservices, and distributed systems.</p>
        </div>
    </div>
<!--Csharp-->
    <div class="flex gap-4 items-center">
        <div class="">
            <img src={csharp} alt="loading" class="max-w-[30vw] sm:max-w-[140px]" />
        </div>
        <div class="">
            <p>C# is a general-purpose, object-oriented programming language developed by Microsoft. It is a compiled language that runs on the .NET Framework. C# is a powerful language that can be used to create a wide variety of applications, including web applications, desktop applications, and mobile applications.</p>
        </div>
    </div>
<!--Firebase-->
    <div class="flex gap-4 items-center">
        <div class="">
            <img src={fb} alt="loading" class="max-w-[30vw] sm:max-w-[140px]" />
        </div>
        <div class="">
            <p>Firebase is a Backend-as-a-Service (Baas) that provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit.</p>
        </div>
    </div>
<!--Svelte-->
    <div class="flex gap-4 items-center">
        <div class="">
            <img src={svelte} alt="loading" class="max-w-[30vw] sm:max-w-[140px]" />
        </div>
        <div class="">
            <p>Svelte.js is a modern JavaScript framework that is designed to be simple, fast, and efficient. It is a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM. Svelte.js is a great choice for building high-performance web applications.</p>
        </div>
    </div>
<!--Tailwind-->
<div class="flex gap-4 items-center">
    <div class="">
        <img src={tailwind} alt="loading" class="max-w-[30vw] sm:max-w-[140px]" />
    </div>
    <div class="">
        <p>TailwindCSS is a utility-first CSS framework that provides a set of classes that can be used to style HTML elements. TailwindCSS is designed to be lightweight and easy to use, and it can be used to create a wide variety of designs.</p>
    </div>
</div>

</div>