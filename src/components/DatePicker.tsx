import { DatePicker as AntDatePicker, GetProps } from 'antd';
import { FC } from 'react';

interface IDatePickerProps {
    setSelectedDate: (value: React.SetStateAction<undefined>) => void;
}

type RangePickerProps = GetProps<typeof AntDatePicker.RangePicker>;

const DatePicker: FC<IDatePickerProps> = (props) => {
    const { setSelectedDate } = props;
    const { RangePicker } = AntDatePicker;

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        const allowedStartDate = '2024-01-06';
        const allowedEndDate = '2024-02-06';
        return (
            (current && current.isBefore(allowedStartDate)) ||
            (current && current.isAfter(allowedEndDate))
        );
    };

    const handleDate = (value: any) => {
        setSelectedDate(value);
    };

    return (
        <RangePicker
            size="middle"
            className="mt-1 py-2 rounded-md "
            disabledDate={disabledDate}
            onChange={handleDate}
        />
    );
};

export default DatePicker;
