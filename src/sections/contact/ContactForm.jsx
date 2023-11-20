import { useForm, ValidationError } from "@formspree/react";
import React, { useEffect, useRef, useState } from "react";
import { checkVisibilityFunc } from "./index";

function useAnimatedPlaceholders(refs) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const animatePlaceholders = () => {
      if (animated) return;
      setAnimated(true);

      refs.forEach((ref, index) => {
        // Ensure that ref.current is defined
        if (!ref.current) return;

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

    const checkVisibility = checkVisibilityFunc(animatePlaceholders);

    checkVisibility();
    document.addEventListener("scroll", checkVisibility);

    return () => {
      document.removeEventListener("scroll", checkVisibility);
    };
  }, [refs, animated]);
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xjvqdjpk");
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  useAnimatedPlaceholders([nameRef, emailRef, subjectRef, messageRef]);

  if (state.succeeded) {
    return <p>Thank you!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" name="email" id="email" placeholder="Your Email Address" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea ref={messageRef} name="message" id="message" cols="30" rows="10" placeholder="Your Message ..." />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="btn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
