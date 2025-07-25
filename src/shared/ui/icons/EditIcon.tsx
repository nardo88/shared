import IconComponent, { type IconComponentProps } from "./IconComponent";

const EditIcon: React.FC<IconComponentProps> = (props): React.ReactNode => {
  return (
    <IconComponent fill="none" id="edit" {...props} viewBox="0 0 16 16">
      <path
        d="M4.66797 4.66669H4.0013C3.64768 4.66669 3.30854 4.80716 3.05849 5.05721C2.80844 5.30726 2.66797 5.6464 2.66797 6.00002V12C2.66797 12.3536 2.80844 12.6928 3.05849 12.9428C3.30854 13.1929 3.64768 13.3334 4.0013 13.3334H10.0013C10.3549 13.3334 10.6941 13.1929 10.9441 12.9428C11.1942 12.6928 11.3346 12.3536 11.3346 12V11.3334"
        stroke="#181C25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 3.33334L12.6667 5.33334M13.59 4.39001C13.8526 4.12745 14.0001 3.77133 14.0001 3.40001C14.0001 3.02869 13.8526 2.67257 13.59 2.41001C13.3274 2.14745 12.9713 1.99994 12.6 1.99994C12.2287 1.99994 11.8726 2.14745 11.61 2.41001L6 8.00001V10H8L13.59 4.39001Z"
        stroke="#181C25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconComponent>
  );
};

export default EditIcon;
