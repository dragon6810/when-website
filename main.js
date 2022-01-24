var page = {
    name: [
        "Home",
        "Discussion",
        "Polls",
        "Science",
        "Social Studies",
        "Math",
        "Reading",
        "Special",
        "Archives",
        "Games"
    ],

    page: 0,

    switchpage: function(index) {
    if (index == 0) { document.getElementById("content").innerHTML = `<div class="poll-box"><h1>Poll Section</h1>So ye im not really sure whats supposed to go in here but like i saw a pie chart thing so its probably like a poll or something, but ye this is just to see if the GUI with the divs and classes are working properly for the main website hub thing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div>
    <div class="menu-box"><h1>FLASH NEWS</h1>On Monday, we learned that Ms. Lonetti  left on Christmas break. Nothing is known about the current search for a new drama teacher, and we wonder; what will happen with the 8th grade play? Some other news is that we have Thursday is 3 Kings Day and we have school off, as well as Wednesday was very icy and some people fell. Friday is a possible snow day, but little is known. Mr. Bissin, the music and band director is now full time, and 6th grade band is now 3 times a week, and due to Ms. Lonetti leaving, we now have music twice a week.</div>
    <div class="calendar-box"><h1>Calendar</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div>
    <div class="riddle-box"><h1>Riddle Of The Week</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div><div class="art1-box"><h1>Headline</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. 
    Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div><div class="art2-box"><h1>Headline</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div>`;
    }
    else if (index == 1) document.getElementById("content").innerHTML = `<div id="disqus_thread"></div><script>var disqus_config = function() {this.page.url = 'http://when-6.com/index.html';this.page.identifier = when6pog;};(function() {var d = document, s = d.createElement('script');s.src = 'https://when-6.disqus.com/embed.js';s.setAttribute('data-timestamp', new Date());(d.head || d.body).appendChild(s);})();</script><noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>`;
    else if (index == 2) document.getElementById("content").innerHTML = `<h1>Nothing to see here yet!</h1><p>coming soon... <img src="img/eyes.png" width="20" height="20"></p>`;
    else if (index == 3) document.getElementById("content").innerHTML = `<div class="article-box"><p>On Monday, we started an experiment on thermal energy, using different materials to insulate and conduct thermal energy. We continued this on Tuesday and Wednesday.On Wednesday, we also watched a very strange video on thermal energy conductors and insulators. We learned that a bad conductor makes a good insulator, and that air is a bad conductor. That explains why double-paned windows are good insulators, because the pockets of air in them doesn’t conduct heat into the outside air. Anyway, the video was very, very weird.</p></div>`;
    else if (index == 4) document.getElementById("content").innerHTML = `<div class="article-box"><p>Monday: Today in social studies we had mrs.waters. We started working on a project were you pick a european country and research about it and make a little presentation. </p></div>`;
    else if (index == 5) document.getElementById("content").innerHTML = `<div class="article-box"><p>Ms. DeMaria was out this week, and during math we worked on our Daily Math spiral and understanding the questions, and worked on the Khan Academy and IXL assignments that are due. On Monday, Mrs. Phyllis  was our substitute. On Tuesday, we had some homework, which was a 6 page slide, solving problems using the order of operations.</p></div>`;
    else if (index == 6) document.getElementById("content").innerHTML = `<div class="article-box"><p>Today in reading Ms. Gwiazda was not there, so we had Ms. Raymond as a substitute. Together we read chapters 5 and 6 of the book The Skin I’m In. Then, after that we answered the comprehension questions and did more character notes. We also had another assignment where we wrote a journal entry as Maleeka in chapters 5 and 6. </p></div>`;
    else if (index == 7) document.getElementById("content").innerHTML = `<div class="article-box"><h1>Gym</h1><p>We started singing We Shall Overcome, a song from the Civil Rights Movement, about overcoming prejudice and discrimination.Congratulations to Iris, Emi, Sofia, and Timothy for getting into the CMEA regional festivals!</p></div><div class="article-box"><h1>Music</h1><p>We started singing We Shall Overcome, a song from the Civil Rights Movement, about overcoming prejudice and discrimination.Congratulations to Iris, Emi, Sofia, and Timothy for getting into the CMEA regional festivals!            </p>    </div><div class="article-box"><h1>Drama</h1><p>Due to Ms. Lonetti leaving, this section will not continue unless we have a new drama teacher. We now have music twice a week, because we have it during the time we would have drama.</p></div><div class="article-box"><h1>Art</h1><p>In art we are making a dragon to put in the hall. We each made different sections (some did the tail or face, but most did the scales), then we are going to put it all together. </p></div>`;
    else if (index == 8) document.getElementById("content").innerHTML = `<h1>Nothing to see here yet!</h1><p>coming soon... <img src="img/eyes.png" width="20" height="20"></p>`;
    else if (index == 9) document.getElementById("content").innerHTML = `<h1>Nothing to see here yet!</h1><p>coming soon... <img src="img/eyes.png" width="20" height="20"></p>`;
    this.page = index;
    }
};

/*
function switchpage(index) {
    if (index == 0) document.getElementById("content").innerHTML = `<div class="poll-box"><h1>Poll Section</h1>So ye im not really sure whats supposed to go in here but like i saw a pie chart thing so its probably like a poll or something, but ye this is just to see if the GUI with the divs and classes are working properly for the main website hub thing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div><div class="menu-box"><h1>FLASH NEWS</h1>On Monday, we learned that Ms. Lonetti  left on Christmas break. Nothing is known about the current search for a new drama teacher, and we wonder; what will happen with the 8th grade play? Some other news is that we have Thursday is 3 Kings Day and we have school off, as well as Wednesday was very icy and some people fell. Friday is a possible snow day, but little is known. Mr. Bissin, the music and band director is now full time, and 6th grade band is now 3 times a week, and due to Ms. Lonetti leaving, we now have music twice a week.</div><div class="calendar-box"><h1>Calendar</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div><div class="riddle-box"><h1>Riddle Of The Week</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div><div class="art1-box"><h1>Headline</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div><div class="art2-box"><h1>Headline</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar aliquam malesuada. Praesent sit amet elit tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam nulla nisi, cursus eu hendrerit vel, cursus et elit. Curabitur eros tellus, ornare aliquet tempor vel, ultricies a sapien. Donec sit amet lectus convallis, commodo odio non, fringilla odio. Nulla et magna vitae sapien tincidunt mattis vel nec metus. Aliquam laoreet ipsum commodo turpis congue, vel consectetur lectus consectetur. Praesent consequat tortor quis nibh finibus aliquet sed ut elit.</div>`;
    else if (index == 1) document.getElementById("content").innerHTML = `<div id="disqus_thread"></div><script>  var disqus_config = function () {this.page.url = '+'http://when-6.com/discuss.html'+';this.page.identifier = when6pog;};(function() {var d = document, s = d.createElement('script');s.src = 'https://when-6.disqus.com/embed.js';s.setAttribute('data-timestamp', new Date());(d.head || d.body).appendChild(s);})();</script><noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>`;
    else if (index == 2) document.getElementById("content").innerHTML = `<h1>Nothing to see here yet!</h1><p>coming soon... <img src="img/eyes.png" width="20" height="20"></p>`;
    else if (index == 3) document.getElementById("content").innerHTML = `<div class="article-box"><p>On Monday, we started an experiment on thermal energy, using different materials to insulate and conduct thermal energy. We continued this on Tuesday and Wednesday.On Wednesday, we also watched a very strange video on thermal energy conductors and insulators. We learned that a bad conductor makes a good insulator, and that air is a bad conductor. That explains why double-paned windows are good insulators, because the pockets of air in them doesn’t conduct heat into the outside air. Anyway, the video was very, very weird.</p></div>`;
    else if (index == 4) document.getElementById("content").innerHTML = `<div class="article-box"><p>Monday: Today in social studies we had mrs.waters. We started working on a project were you pick a european country and research about it and make a little presentation. </p></div>`;
    else if (index == 5) document.getElementById("content").innerHTML = `<div class="article-box"><p>Ms. DeMaria was out this week, and during math we worked on our Daily Math spiral and understanding the questions, and worked on the Khan Academy and IXL assignments that are due. On Monday, Mrs. Phyllis  was our substitute. On Tuesday, we had some homework, which was a 6 page slide, solving problems using the order of operations.</p></div>`;
    else if (index == 6) document.getElementById("content").innerHTML = `<div class="article-box"><p>Today in reading Ms. Gwiazda was not there, so we had Ms. Raymond as a substitute. Together we read chapters 5 and 6 of the book The Skin I’m In. Then, after that we answered the comprehension questions and did more character notes. We also had another assignment where we wrote a journal entry as Maleeka in chapters 5 and 6. </p></div>`;
    else if (index == 7) document.getElementById("content").innerHTML = `<div class="article-box"><h1>Gym</h1><p>We started singing We Shall Overcome, a song from the Civil Rights Movement, about overcoming prejudice and discrimination.Congratulations to Iris, Emi, Sofia, and Timothy for getting into the CMEA regional festivals!</p></div><div class="article-box"><h1>Music</h1><p>We started singing We Shall Overcome, a song from the Civil Rights Movement, about overcoming prejudice and discrimination.Congratulations to Iris, Emi, Sofia, and Timothy for getting into the CMEA regional festivals!            </p>    </div><div class="article-box"><h1>Drama</h1><p>Due to Ms. Lonetti leaving, this section will not continue unless we have a new drama teacher. We now have music twice a week, because we have it during the time we would have drama.           </p></div><div class="article-box"><h1>Art</h1><p>In art we are making a dragon to put in the hall. We each made different sections (some did the tail or face, but most did the scales), then we are going to put it all together. </p></div>`;
    else if (index == 8) document.getElementById("content").innerHTML = `<h1>Nothing to see here yet!</h1><p>coming soon... <img src="img/eyes.png" width="20" height="20"></p>`
}
*/

function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];
    var selectedtheme;

    // Change the value of href attribute 
    // to change the css sheet.
    if (theme.getAttribute('href') == 'css/style.css') {
        selectedtheme = 0;
    } else if(theme.getAttribute('href') == 'css/dark.css'){
        selectedtheme = 1;
    }
    if (selectedtheme == 0) theme.setAttribute('href', 'css/dark.css');
    else if (selectedtheme == 1) theme.setAttribute('href', 'css/style.css');
}

const buttons = document.querySelectorAll('a');
        buttons.forEach(btn => {
            btn.addEventListener('click', function(e) {

                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                let ripples = document.createElement('span');
                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';
                this.appendChild(ripples);

                setTimeout(() => {
                    ripples.remove();
                },250);
            })
        })

        function saveconfig() {
            var save = {
                selectedtheme: selectedtheme,
                page: page.page
            }
            localStorage.setItem("config", JSON.stringify(save));
        }

        function loadconfig() {
            var savedconfig = JSON.parse(localStorage.getItem("config"));
            if (localStorage.getItem("config") !== null) {
                if (typeof save.selectedtheme !== "undefined") page.page = savedconfig.selectedtheme;
            } else if (localStorage.getItem("config") == null) page.page = 0;
        }

        window.onload = function() {
            loadconfig();
        }

        window.onbeforeunload = function() {
            saveconfig();
        }

