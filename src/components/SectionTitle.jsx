import PropTypes from 'prop-types';

function SectionTitle({ children }) {
  return (
    <h3 className="section-title">{children}</h3>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
