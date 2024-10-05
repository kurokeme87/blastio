import React from "react";

const History = () => {
  return (
    <div className="relative flex max-h-full w-full flex-col">
      <div className="absolute bottom-8 z-10 h-8 w-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-5 left-0 -ml-2 w-full pr-4">
        <div className="w-full overflow-hidden text-camo-600">
          <svg
            fill="none"
            height="7"
            viewBox="0 0 666 7"
            width="666"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              fill="currentColor"
              height="6.48937"
              width="29.2022"
              x="142.477"
              y="0.00390625"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="29.2022"
              x="190.336"
              y="0.00390625"
            ></rect>
            <rect fill="currentColor" height="6.48937" width="138.691"></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="64"
              x="566.488"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="29.2022"
              x="433.609"
              y="0.00195312"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="179.465"
              y="0.00390625"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="240.305"
              y="0.00390625"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="245.332"
              y="0.00390625"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="357.688"
              y="0.00195312"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="362.715"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="634.938"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="648.672"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="662.406"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="426.742"
              y="0.00195312"
            ></rect>
            <rect
              fill="currentColor"
              height="6.48937"
              width="3.08245"
              x="310.227"
              y="0.00390625"
            ></rect>
            <circle
              cx="332.128"
              cy="3.40933"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="405.062"
              cy="3.40933"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="468.062"
              cy="3.40933"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="336.995"
              cy="3.40933"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="409.929"
              cy="3.40933"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="472.929"
              cy="3.40933"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="341.862"
              cy="3.40542"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="414.796"
              cy="3.40542"
              fill="currentColor"
              r="1.46011"
            ></circle>
            <circle
              cx="477.796"
              cy="3.40542"
              fill="currentColor"
              r="1.46011"
            ></circle>
          </svg>
        </div>
      </div>
      <div className="mb-8 mt-4 w-full flex-1 overflow-y-auto pb-8">
        <div className="h-full w-full">
          <table className="relative w-full table-auto">
            <thead className="typography-brand-heading-4 sticky top-0 bg-black text-camo-200">
              <tr>
                <th className="text-left font-normal">Amount</th>
                <th className="text-right font-normal">Action</th>
                <th className="text-right font-normal">Initiated</th>
                <th className="text-right font-normal">Status</th>
              </tr>
            </thead>
            <tbody className="typography-brand-body-l text-yellow-100"></tbody>
          </table>
          <div className="typography-brand-body-l w-full py-8 text-center text-camo-300">
            No history found.
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
