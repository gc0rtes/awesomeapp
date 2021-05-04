// My first Component
// PascalCasing for components and components files

// We use default exports in most if not all component files.
// This means we don't use brackets (destructuring) while importing the class.
export default function Title(props) {
  return <h1>{props.content}</h1>;
}
