import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: "Alejandro Palacios",
  subtitle: "No hay subtítulo",
  title: "No hay título",
};
