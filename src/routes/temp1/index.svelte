<section>
    <div class="card">
        <div class="circle">
            <div class="imgBx">
                <img src="/avatar/profile-1.jpg" alt="profile-pic">
            </div>
        </div>
        <div class="content">
<a href="linkedin"><i class="fab fa-linkedin-in"></i></a>
<h3>Sophia Anderson</h3>
<div class="textIcon">
    <h4>Frontend Developer</h4>
    <a href="more"><i class="fas fa-arrow-right"></i></a>
</div>
        </div>
    </div>
</section>

<style>
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(#777,#222);
    }
    .card{
        position: relative;
        width: 340px;
        height: 450px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }
    .circle{
        position: absolute;
        top: -190px;
        left: 50%;
        transform: translate(-50%);
        width: 500px;
        height: 500px;
        background: #333;
        clip-path: circle();

    }
    .circle::before{
        content: '';
        position: absolute;
        top: -8px;
        left: -16px;
        width: 100%;
        height: 100%;
        background: transparent;
        box-shadow: 0 0 0 20px rgba(255,0,0,0.5);
      border-radius: 50%;
      z-index: 1000;
      pointer-events: none;

    }
    .circle .imgBx{
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 340px;
        height: 310px;
    }
    .circle .imgBx img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s;
        transform-origin: top;

    }
    .circle .imgBx:hover img{
        transform: scale(1.5);
    }
    .content{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 140px;
       padding: 20px 30px;
    }
    .fa-linkedin-in{
        background: #0077bf;
        color: #fff;
        padding: 2px 4px;
        border-radius: 2px;
    }
    .content h3{
        font-size: 1.4em;
        color: #333;
        margin-top: 7px;
        margin-bottom: 2px;
    }
    .textIcon{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .textIcon h4{
        font-weight: 400;
        color: #e91e63;
    }
    .textIcon .fas{
        color: #e91e63;
    }
</style>
