import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Card,
  CardBody,
  Input,
  Textarea,
  IconButton,
} from '@material-tailwind/react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { createTask } from '@/api/tasks';

export const TaskForm = ({ onSubmit }) => {
  const { control, handleSubmit, reset, setFocus } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const submit = (data) => {
    if (data.title) {
      createTask(data)
        .then(() => {
          reset();
        })
        .then(onSubmit);
    }
  };

  useEffect(() => {
    setFocus('title');
  }, [setFocus]);

  return (
    <Card className="w-full max-w-md relative">
      <form onSubmit={handleSubmit(submit)}>
        <CardBody className="p-4 pr-16">
          <div className="my-3 mt-0">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  label="Title"
                  containerProps={{ className: 'min-w-14' }}
                  {...field}
                />
              )}
            />
          </div>
          <div className="my-3 mb-0">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  label="Description"
                  className="min-h-9"
                  containerProps={{ className: 'min-w-14' }}
                  {...field}
                />
              )}
            />
          </div>
          <div className="h-10 w-10 absolute top-4 right-4">
            <IconButton
              type="submit"
              variant="outlined"
              className="h-10 w-10 hover:bg-green-100 border-blue-gray-200"
            >
              <PlusIcon className="h-5 w-5" />
            </IconButton>
          </div>
        </CardBody>
      </form>
    </Card>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func,
};
