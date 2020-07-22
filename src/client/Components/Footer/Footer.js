import React from "react";
import {
  FooterWrap,
  Menu,
  Contact,
  RecentPosts,
  NewsLetter,
  GridWrap,
  FooterTitle,
  FooterText,
  FooterLink,
  NewsLetterInput,
  NewsLetterButton,
} from "./FooterCss";

const Footer = React.memo(() => {
  return (
    <FooterWrap>
      <GridWrap>
        <Contact>
          <FooterTitle>CONTACT</FooterTitle>
          <FooterText>
            Street: 8380 Greensboro Drive <br />
            City: Mc Lean <br />
            State: Virginia <br />
            Zip Code: 22182 <br />
            Phone Number: 703-589-3760
          </FooterText>
        </Contact>
        <Menu>
          <FooterTitle>MENU</FooterTitle>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Home
          </FooterLink>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Our Blog
          </FooterLink>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Products
          </FooterLink>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Sitters
          </FooterLink>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            About
          </FooterLink>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Careers
          </FooterLink>
        </Menu>
        <RecentPosts>
          <FooterTitle>RECENT POSTS</FooterTitle>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Why Are Dogs Better Than Cats?
          </FooterLink>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Best Dog Diets
          </FooterLink>
          <FooterLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Checklist Before Adoption
          </FooterLink>
        </RecentPosts>
        <NewsLetter>
          <FooterTitle>NEWS LETTER</FooterTitle>
          <NewsLetterInput placeholder="Your email adress..."></NewsLetterInput>
          <NewsLetterButton>Subscribe</NewsLetterButton>
        </NewsLetter>
      </GridWrap>
    </FooterWrap>
  );
});

export default Footer;