<main>
    <section class='blue'>
        <h1>Nice Curves</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nostrum labore itaque nesciunt temporibus perferendis ex, deleniti velit voluptatem rem esse aliquam sapiente molestias quidem voluptate sequi recusandae cum accusamus!</p>
    <div class="curve"></div>
    </section>
    <!-- <section class='red'>
        <h1>Nice Curves</h1>
        <p>Eum dolores labore unde vitae obcaecati sunt rerum ipsa inventore illo doloribus perferendis, cum, nobis sapiente dicta accusamus dolorum dignissimos iure! Aliquam natus beatae sapiente excepturi nihil cum dicta corporis.</p>
    </section>
    <section class='pink'>
        <h1>Nice Curves</h1>
        <p>Maiores magni repellat numquam aut optio magnam est voluptatum in at dolorem doloribus ratione veritatis, aliquid qui. Ipsum, saepe quasi. Saepe corporis facilis iure temporibus modi blanditiis possimus veritatis! Aspernatur.</p>
    </section>
    <section class='dark'>
        <h1>Nice Curves</h1>
        <p>Aliquid at pariatur velit quo repellendus rem error, nesciunt iste unde consectetur ducimus tempora corrupti fugit architecto assumenda reprehenderit veniam. Accusamus excepturi eos quibusdam exercitationem aliquam culpa provident, a maiores.</p>
    </section>
    <section>
        <h1>Nice Curves</h1>
        <p>Nisi in repellendus assumenda ab veritatis ducimus fugit vero adipisci modi? Repellat facere, rerum, ducimus libero recusandae sapiente tempora natus est ullam neque officia commodi incidunt ipsum distinctio dolores ipsam?</p>
    </section>
    <section>
        <h1>Nice Curves</h1>
        <p>Impedit eius dolor quod sint, tempora dicta nulla modi eum recusandae rerum sapiente libero tenetur id praesentium, porro quo, harum voluptatum? Dolores, doloribus consectetur? Quod sequi illo a et ullam?</p>
    </section>
    <section>
        <h1>Nice Curves</h1>
        <p>Quo, repellat? Ipsa tempora sit, debitis nulla eligendi neque quo provident corrupti ducimus nam accusamus ipsam perferendis dignissimos harum dolores quos reprehenderit vero? Nemo, iste explicabo quae voluptate molestias voluptatum?</p>
    </section>
    <section>
        <h1>Nice Curves</h1>
        <p>Nihil illo molestias nesciunt impedit amet nam quasi eum facere ducimus doloribus quos recusandae, qui cumque tenetur quam totam in similique harum. Distinctio corrupti quas repellat, deleniti quaerat reprehenderit nemo.</p>
    </section>   -->
</main>




<style>
main{
    
    background: #202731;
    overflow-x: hidden;
}
section{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    padding: 100px 20vw;
}
section h1{
    color: white;
    font-size: 4rem;
}
 section p{
    color: white;
    font-size: 1.5rem;
}
.blue{
    background: #3c31dd;
}
.red{
    background: #dd3f31;
}
.pink{
    background: #ff0066;
    overflow: hidden;
}
.dark{
    background: #0f0f10;
}

 /* Curved bg with plain CSS */
.curve{
    position: absolute;
    height: 225px;
    width: 100%;
    bottom: 0;
    text-align: center;
}
.curve::before{
content: '';
display: block;
position: absolute;
border-radius: 100% 50%;
width: 55%;
height: 100%;
background-color: hsl(216, 21%, 16%);
transform: translate(85%, 60%);
}
.curve::after{
    content: '';
display: block;
position: absolute;
border-radius: 100% 50%;
width: 55%;
height: 100%;
background-color: #3c31dd;
transform: translate(-4%, 40%);
z-index: -1;
}
</style>