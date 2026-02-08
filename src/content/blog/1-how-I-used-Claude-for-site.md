---                                                                                                                              
  title: "How I used Claude to build this site in half a day"                                                                                                         
  date: 2026-02-02                                                                                                                 
  description: "My first time using Claude Code to build and deploy my first personal website"                                                                                  
---                                                                                                                      

I've never touched an Anthropic product until today. Not for any anti-Claude reason; I'm completely tool agnostic. While I am a top 1% user of chatGPT according to my 2025 chatGPT wrapped, that award represents laziness and familiarity more than loyalty. Sticking with one tool for when infinite context histories are solved is pretty appealing though, if I had to give a technical reason. 

On day one of Fractal Tech bootcamp, we were asked to download and install Claude Code with the goal of building and deploying a personal website. I've also never built a personal website before, so I was truly starting from scratch. We were also tasked with building up Claude skills/getting Claude to improve itself/assessing risks like prompt injection/improving the harness. I'm likely using these terms wrong, because I've also never heard of Claude skills or harnesses until today, and I honestly forgot about this part of the assignment as I dove into making a personal website and logging my progress with timestamps. 

## Logs

11:00am - In the first twenty minutes, I got Claude and a Pro subscription setup. Luckily I had practiced Git+Github, Terminal commands, and used Visual Studio Code for the last few weeks, so I wasn't getting tripped up there. Also, I probably cheated a bit by asking chatGPT for setup and background help first...chatGPT is a comfort. 

11:30am - I fed Claude Code the background information I went over with chatGPT e.g. domain names, constraints regarding privacy, minimalist design decisions for the page layouts etc. I also asked Claude to interview me for any remaining gaps. 

12:00pm - Interview and back-and-forth questions finished. I went with a static site built with Astro, Github Pages for hosting, and decided to table the domain work. 

After lunch, Claude one-shotted the v0 skeleton. Before I committed and pushed to Github, I made sure to scrub my files of identifying information. 

2:30pm - This is the first time I ran into problems. Github Pages was down, but I didn't know/assumed it was a PEBKAC problem since it usually is. I kept pushing forward with pasting screenshots into Claude Chat for help until Claude said that my error was a Github infrastructure problem and suggested Vercel. So I deployed the site to Vercel. 

3:30pm - Now it was time for content. I filled out my index, about, now pages. Asked Claude Code about a CMS for blogging and building a simple auth gate for the resume page. This sent me into a rabbit hole because I rejected the most simple option, which wasn't truly password protected (anyone with DevTools can see the password). But I managed to commit and push the Vercel serverless function (bonus: free to go through their API)

We broke out into a group circle to do journaling by pen and paper for awhile. I really enjoyed this part; that writing is such a key part of the program assures me that I made the right decision. 

5:15pm - I was meant to finish blogging and deploying the blog by 6pm, but some true PEBKAC reared its head. I kept trying to understand why Vercel was deploying an older version of the site when I realized, hey, it's me. I chose the older site as the "current site." 

## Other Considerations

Near Term To-Dos:
- Add art and writing to the portfolio
- Setup domain and domain redirects
- Upload actual resume to the password protected resume portion

Long Term To-Dos:
- Real design work, since I went for utility here
- Improve blog e.g. consider making a true CMS system
- Switch out stack - perhaps I shouldn't have let Claude choose totally unfamiliar Astro for me

## Reflection

I finished this at 10:30pm after the cohort went out to Radergast. It was a good day, until now perhaps. I looked at other students' site and blogs before I finished writing this and honestly feel dismayed. Theirs are super cool! And most of them also did the assignment properly with researching harnesses and such. 

But hey, I probably just need to sleep. Comparison is the thief of joy, which the program instructors also reiterated. I'm learning at my own pace, which is all that should matter. 