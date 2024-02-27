

export const Preparation = ({ step, stepNumber }) => {
    return (
        <li className="flex w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
         <span className="mr-2 text-gray-500">{stepNumber}.</span>
      {step}
    </li>

    );
}