import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout Example - About</h2>
      <p>
        This is the about page. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Corrupti velit rem modi repudiandae reiciendis dolorem
        odio minima quibusdam dolores reprehenderit beatae deserunt nesciunt,
        aut praesentium dolorum? Explicabo voluptatibus quisquam fugiat?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Repudiandae dolores explicabo eos rem quos, neque harum nobis numquam
        officiis ad vero, commodi, placeat et soluta? Accusantium ipsum adipisci
        voluptatum quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Consectetur facilis perferendis ab? Tempore natus quasi obcaecati
        modi. Deleniti blanditiis assumenda in minima iste facilis! Officiis sed
        error commodi sint omnis!
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
