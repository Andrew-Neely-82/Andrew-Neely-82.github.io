import { useState, useEffect, useRef } from "react";
import "./contact.scss";

const Contact = () => {
  
  const useAnimatedPlaceholders = (refs) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
      const animatePlaceholders = () => {
        if (animated) return;
        setAnimated(true);

        refs.forEach((ref, index) => {
          const input = ref.current;
          const placeholder = input.getAttribute("placeholder");
          input.setAttribute("placeholder", "");

          setTimeout(() => {
            typePlaceholder(input, placeholder, 0);
          }, index * 100);
        });
      };

      const typePlaceholder = (input, placeholder, charIndex) => {
        if (charIndex < placeholder.length) {
          input.setAttribute("placeholder", input.getAttribute("placeholder") + placeholder[charIndex]);
          setTimeout(() => {
            typePlaceholder(input, placeholder, charIndex + 1);
          }, 50);
        }
      };

      const checkVisibility = () => {
        const contactSection = document.getElementById("contact");
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.top <= windowHeight && rect.top + rect.height >= 0;

        if (isVisible) {
          animatePlaceholders();
        }
      };

      checkVisibility();
      document.addEventListener("scroll", checkVisibility);

      return () => {
        document.removeEventListener("scroll", checkVisibility);
      };
    }, [refs, animated]);
  };
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  useAnimatedPlaceholders([nameRef, emailRef, numberRef, subjectRef, messageRef]);

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <span
        style={{
          textAlign: "center",
          fontSize: "large",
          marginBottom: "1rem",
          color: "yellow",
        }}>
        Updating the form below soon!
      </span>
      <span
        style={{
          textAlign: "center",
          fontSize: "large",
          marginBottom: "1rem",
          color: "yellow",
        }}>
        Please use Linkedin button above in Home section
      </span>
      <form action={`#`}>
        <div className="input-box">
          <input ref={nameRef} type="text" name="name" id="name" placeholder="Full Name" />
          <input ref={emailRef} type="email" name="email" id="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input ref={numberRef} type="text" name="number" id="number" placeholder="Contact Number" />
          <input ref={subjectRef} type="text" name="subject" id="subject" placeholder="Email Subject" />
        </div>
        <textarea ref={messageRef} name="" id="message" cols="30" rows="10" placeholder="Your Message ..." />
        <input className="btn" type="submit" value="Send " />
      </form>
    </section>
  );
};

export default Contact;
