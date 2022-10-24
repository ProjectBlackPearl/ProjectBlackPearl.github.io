<script lang="ts">
    import { readData } from './../Database'  
    const data = readData()

    let img = 0

    function biggerImg() {
        img = 1
    }
</script>

<div class="news border bg">
    <h2 style="font-family: 'Reem Kufi', sans-serif;">
        News page
    </h2>

    <p>
        {data.date}, {data.user}
    </p>
    
    <p class="report">
        {data.message}
    </p>
    
    <a href={data.img}>
        <img class="news-img" src="{data.img}" alt="App" width="650">
    </a>
</div>