import PropTypes from 'prop-types';
import { useRef } from 'react';
import {
  Card,
  CardBody,
  Input,
  Textarea,
  IconButton,
} from '@material-tailwind/react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { updateTask, deleteTask } from '@/api/tasks';

export const Task = ({ id, title, description, onAction }) => {
  const timeoutId = useRef();

  return (
    <Card className="w-full max-w-md">
      <CardBody className="p-4 pr-16">
        <div className="my-3 mt-0">
          <Input
            label="Title"
            defaultValue={title}
            containerProps={{ className: 'min-w-14' }}
            onChange={(e) => {
              clearTimeout(timeoutId.current);
              timeoutId.current = setTimeout(() => {
                updateTask(id, { title: e.target.value });
              }, 700);
            }}
          />
        </div>
        <div className="my-3 mb-0">
          <Textarea
            label="Description"
            defaultValue={description}
            className="min-h-9"
            containerProps={{ className: 'min-w-14' }}
            onChange={(e) => {
              clearTimeout(timeoutId.current);
              timeoutId.current = setTimeout(() => {
                updateTask(id, { description: e.target.value });
              }, 700);
            }}
          />
        </div>
        <div className="h-10 w-10 absolute top-4 right-4">
          <IconButton
            onClick={() => {
              deleteTask(id).then(onAction);
            }}
            variant="outlined"
            className="h-10 w-10 hover:bg-red-100 border-blue-gray-200"
          >
            <TrashIcon className="h-5 w-5" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
};

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onAction: PropTypes.func,
};
