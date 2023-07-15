import { SimpleGrid } from '@chakra-ui/layout';
import NewCard from './index';

export default {
  component: (props : any) => <SimpleGrid  gap={4} columns={props.columns}>{(new Array(props.columns).fill(0)).map((i) => <NewCard key={i} {...props}></NewCard>)}</SimpleGrid>,
  title: 'Webpage/News/NewCard',
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'number', description: "the id of the card"},
    title: { control: 'text', description: "The title of the new"},
    subtitle: { control: 'text', description : "The subtitle of the new" },
    content: {control : 'text', description : "The content of the new, its partial because is not loaded until you retrieve the new"},
    created_at: { control: 'date', description : "Created at date"},
    tags: { control: 'object', description: "Categories that belongs this new" },
    author: { control: 'object', description: "The author of the new" },
    columns: {control: { type: 'range', min: 1, max: 6, step: 1 }, description : "This is for defining the number of news to display in the storybook"}
  },
};

export const Default = {
  args: {
    columns: 4,
    id: 0,
    title: "Lorem ipsum dolor sit amet, consectetur",
    subtitle: " Minima alias earum expedita obcaecati culpa beatae vero distinctio optio delectus sequi perspiciatis aliquam maiores maxime, officia ea deserunt omnis, fugiat doloremque.",
    created_at: new Date().toUTCString(),
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident praesentium reiciendis temporibus deleniti sequi! Placeat facilis voluptatum excepturi perferendis blanditiis aliquid. Laboriosam unde sed dolore corrupti voluptas voluptate? Consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio neque aliquam quis veritatis dolore facilis error quo ullam provident eligendi sint beatae reprehenderit, quos voluptate maxime doloribus pariatur vero facere?",
    tags: ['colegio', 'facultad', 'informatica'],
    author: {
      name: "Jose R. Peña Seco",
      avatar: ""
    },

  },
};



