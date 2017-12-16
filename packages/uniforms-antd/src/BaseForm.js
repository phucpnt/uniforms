import BaseForm from 'uniforms/BaseForm';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

const AntD = parent => class extends parent {
    static AntD = AntD;

    static displayName = `AntD${parent.displayName}`;

    static propTypes = {
        ...parent.propTypes,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
    };

    getChildContextState () {
        return {
            ...super.getChildContextState(),
            labelCol: this.props.labelCol,
            wrapperCol: this.props.wrapperCol,
        };
    }

    getNativeFormProps () {
        const error = this.getChildContextError();
        const {
            className,
            labelCol,
            wrapperCol,
            ...props
        } = super.getNativeFormProps();

        return {
            ...props,
            className: classnames('antd-form', {error, 'antd-form-horizontal': labelCol || wrapperCol}, className)
        };
    }
};

export default AntD(BaseForm);
