# Frontend Task
#### Next.JS + Tailwind CSS

### Steps to run:
- npm install
- npm run build
- npm run start

### Publcly deployed at https://frontendtask-mu-eight.vercel.app/

This repo contains Frontend Task for Round 1 for the role of Software Engineer at Wasserstoff.

Approaching from the general flow noticeable from first glance, I started by creating a Cards and a Dashbard component. Designing the the cover swipe on click and the cover contents. 

I continued to design Dashboard layout, I started with a flex layout for Dashboard and continued to design each of the children components for Dashboard. I changed the layout of Dashboard to grid after working with the autoscroll Cards in left side of the screen as it allowed for better segmentation of the page. In addition, changing the grid template for smaller screen sizes provides a solid responsiveness approach. 

Animations for auto scroll of Cards and the banner in the middle of page are implemented in JS itself while the others rely on CSS, including the cover swipe and the changing widths of rows on cover. 

The cover contents are designed to resize depending on the screen size for responsiveness. the grid layout for Dashboard is changed to 3 rows for small.
