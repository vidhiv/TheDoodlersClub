import React from 'react';
//importing images for homepage
import homepage1 from "./images/homepage_1.jpg";
import homepage2 from "./images/homepage_2.jpg";

// Use images in JSX
let img1 = <img src={homepage1} alt="home page image" />;
let img1caption = <figcaption>Canvas painting</figcaption>;
let img2 = <img src={homepage2} alt="home page image" />;
let img2caption = <figcaption>Lets Begin!!!</figcaption>;

let homepagecontent = <><figure className="leftfloating">{img1}{img1caption}</figure>
                <h1>What is Doodling?  &#127912;</h1>
                <p>Doodling just does not mean to scribble. It says more about our personalities than we may even realise. It simply means to express your emotions like when you are happy or bored or angry or more in the form of art. Something you do in your spare time or Something you do all the time! </p>
                <h2>Reasons to doodle?  &#129300;</h2>
                <p>Artistic and creative expression offers many benefits. Here’s our top ten:</p>
                <ol type="1">
                    <li>It’s okay to make a mess! : Leave the set up and cleanup of all those art supplies to us. Our studio is bright, open, and it can handle the drops of paints, splatters of glue, and scraps of fabric all over the floor when creativity is happening. So go ahead and let the kids (or you) make a mess.</li>
                    <li>It relieves stress : Your life is busy, but it’s important to remember to take some time for yourself. A recent study found that 45 minutes of creative activity significantly lessens stress in the body, regardless of artistic experience or talent. (Study published in Art Therapy: Journal of the American Art Therapy Association, titled “Reduction of Cortisol Levels and Participants’ Responses Following Art Making” 2016).</li>
                    <li>It exercises a new part of your brain : Is the creative part of your brain underfed? If you work in a highly analytical environment, then an art class is an excellent way to give your brain’s right side a rest and stretch the left side.</li>
                    <li>It prepares kids for the future : Art enhances fine motor skills, hand-eye coordination, problem solving skills, lateral thinking, complex analysis and critical thinking skills. And art education increases creativity and open-mindedness. Creativity is cited by business leaders as the top leadership competency for the future. </li>
                    <li>You’ll look at the world in new ways : Art makes you look at things anew – even mundane ordinary aspects of the world. Communicating with color, shape, and form awakens your imagination.</li>
                    <li>Get UNSTUCK : Our inner voices make harsh critics that can stop us before we even begin. Art teaches risk taking, learning from one’s mistakes, and being open to other possibilities. The camaraderie and support of fellow classmates and an encouraging instructor can be the push that you need to just start making!</li>
                    <li>Challenge yourself : Learn something new! Whether it’s a new technique, a new medium, or if art in general is something you’ve never done before – learning new things strengthens us and gives us more confidence.</li>
                    <li>Decorate your house/apartment : You’ll get so much joy from creating something yourself and having it be a unique addition to your home. And when someone compliments you on the art, you can tell people YOU made it!</li>
                    <li>Meet new people : Taking a class together helps you learn new things about old friends and gives you something new to talk about when you go out. And you’ll meet cool new people you otherwise may have never known. Art reaches across racial stereotypes, religious barriers, and socio-economical levels and prejudices. Seeing other culture’s creative expression allows everyone to be more connected and less isolated.</li>
                    <li>Rekindle your passion : Jealous of what kids made in summer camp and you want to make something, too? Nowadays, you’ve become too busy to keep old hobbies; however, indulging in an old passion could be the perfect remedy for refreshing your spirit.</li>
                </ol>
                <figure className="rightfloating">{img2}{img2caption}</figure>
                <h2>Why this club?  &#128559;</h2>
                <p>We encourage different art forms like drawing, sketching, painting, many more and welcome one and all. No age barriers</p>
                <h2>Want to have fun doodling? &#128396;</h2>
                <p>Yaay!!! Come forward and join us! We are excited to have you :) </p>
                <h2>So what are you waiting for?</h2>
                <h2>Lets doodle together!!! &#128156;</h2>
            </>;
            
function Home() {
    return <main>{homepagecontent}</main>;
}

export default Home;