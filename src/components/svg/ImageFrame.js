import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function ImageFrame(props) {
  const [entered, setEntered] = useState(false);

  const pathVariant = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: entered ? 1 : 0,
      transition: {
        duration: 20,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        if (inView === true) {
          setEntered(true);
        }
      }}
      root={null}
      rootMargin="0px"
      threshold={0.8}
    >
      <svg
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 1697.808 1700.508"
        xmlSpace="preserve"
      >
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M1613.496 84.39c-17.495-4.688-34.253-6.308-51.223-6.869-42.801 1.413-84.25 9.572-139.595 56.669 10.212 14.543 18.905 33.547 18.905 51.989 0 31.221-31.704 61.939-78.357 61.94-25.752-1.266-55.481-12.555-72.636-33.831-22.901 6.793-52.21 5.396-58.457 1.244-25.87 11.941-51.076 20.977-75.621 27.115-167.902 41.96-314.507-70.064-281.463-151.366 15.862-38.987 57.22-46.164 98.133-38.058 58.916 11.685 99.392 52.969 88.307 64.054v.995c-3.628 1.554-6.6 3.902-16.791-.871-4.062-1.909-8.415-5.099-13.06-9.578-33.238-29.705-52.785-57.569-94.277-52.984-12.469 1.397-22.934 2.61-33.084 9.204-41.259 26.824-45.44 90.015 31.467 141.292 52.983 35.321 131.965 52.83 216.166 33.332 23.631-5.473 47.97-13.848 73.008-25.125-29.518-10.275-52.984-45.047-52.984-76.366 0-51.749 54.338-73.382 106.715-73.382 47.35 0 90.865 18.47 123.63 47.014 3.321 3.321 3.153 4.451 5.97 6.468 70.024-35.923 114.777-45.71 154.023-45.942 17.339.102 35.753 2.07 56.947 7.333 5.263 21.194 7.23 39.608 7.333 56.947-.232 39.245-10.019 83.999-45.942 154.023 2.018 2.817 3.147 2.649 6.468 5.97 28.543 32.765 47.014 76.279 47.014 123.63 0 52.377-21.633 106.715-73.382 106.715-31.319 0-66.091-23.466-76.366-52.984-11.276 25.038-19.651 49.377-25.125 73.008-19.498 84.2-1.988 163.183 33.333 216.166 51.277 76.906 114.468 72.726 141.292 31.467 6.594-10.15 7.807-20.615 9.204-33.084 4.585-41.492-23.279-61.038-52.984-94.276-4.478-4.645-7.669-8.998-9.578-13.06-4.773-10.19-2.425-13.162-.871-16.791h.995c11.085-11.085 52.369 29.39 64.054 88.307 8.105 40.913.929 82.271-38.058 98.133-81.302 33.045-193.326-113.56-151.367-281.463 6.138-24.545 15.174-49.75 27.115-75.621-4.153-6.247-5.55-35.556 1.244-58.457-21.276-17.154-32.564-46.883-33.831-72.635 0-46.653 30.719-78.357 61.939-78.357 18.442 0 37.446 8.693 51.989 18.905 47.096-55.345 55.255-96.794 56.668-139.595-.558-16.972-2.179-33.729-6.867-51.225zm-382.854 126.665c25.992-11.729 34.262-15.286 48.756-23.134 0-2.974-2.4-16.538 3.607-28.731 8.958-18.197 24.516-23.756 30.223-23.756 9.939 0 12.65 9.329 6.219 13.931-6.436 4.584-15.477 6.078-23.383 7.213-11.9 5.005-12.935 16.329-12.935 29.105 62.028-33.372 72.835-41.784 121.391-66.666-31.99-36.686-90.72-42.615-137.933-29.228-41.701 11.81-95.282 46.091-79.228 85.571 4.474 10.992 13.174 20.013 23.258 26.74 5.722 3.812 12.399 6.797 20.025 8.955zm265.146 276.214c6.727 10.084 15.748 18.784 26.74 23.258 39.48 16.054 73.761-37.527 85.571-79.228 13.386-47.213 7.457-105.943-29.228-137.933-24.882 48.556-33.295 59.363-66.666 121.391 12.776 0 24.1-1.035 29.105-12.935 1.135-7.905 2.629-16.947 7.213-23.383 4.602-6.431 13.931-3.721 13.931 6.219 0 5.707-5.559 21.265-23.756 30.223-12.193 6.007-25.757 3.607-28.731 3.607-7.847 14.494-11.405 22.764-23.134 48.756 2.157 7.627 5.142 14.304 8.955 20.025zm-256.937-274.473c11.099 2.918 30.042 3.126 48.755-2.488-2.93-5.541-5.786-11.865-7.462-17.91-13.321 7.467-27.189 14.205-41.293 20.398zm266.638 204.947c-6.045-1.676-12.369-4.532-17.91-7.462-5.614 18.713-5.406 37.656-2.488 48.755 6.194-14.104 12.931-27.972 20.398-41.293zm-213.405-208.678c57.167-17.249 116.954-73.41 124.376-76.367-3.97-4.412-4.277-5.586-8.209-9.95-53.792 27.773-66.264 38.255-124.376 68.407 1.798 6.122 4.904 12.51 8.209 17.91zm214.649 204.947c30.151-58.112 40.633-70.585 68.407-124.376-4.363-3.932-5.538-4.239-9.949-8.209-2.957 7.422-59.118 67.21-76.367 124.376 5.399 3.305 11.786 6.411 17.909 8.209zm-87.039-277.832c-2.183.865-1.762 1.591-3.98 2.487-35.184 28.14-77.382 61.421-120.396 74.874 28.488 32.052 87.894 41.851 122.635 10.323 27.276-24.768 22.013-57.255 1.741-87.684zm54.328 143.755c-31.528 34.741-21.729 94.147 10.323 122.635 13.453-43.014 46.734-85.212 74.874-120.396.896-2.218 1.622-1.797 2.487-3.98-30.428-20.273-62.915-25.536-87.684 1.741zm-5.823-184.053c-14.703 5.156-28.17 11.095-56.218 25.372 4.167 4.692 5.553 6.121 7.712 9.204 13.187-11.798 30.988-24.953 48.506-34.576zm99.229 182.311c3.082 2.159 4.511 3.545 9.204 7.712 14.277-28.048 20.216-41.514 25.372-56.218-9.622 17.519-22.777 35.32-34.576 48.506zM84.312 1616.118c17.495 4.688 34.253 6.308 51.223 6.869 42.801-1.413 84.25-9.572 139.595-56.668-10.212-14.543-18.905-33.547-18.905-51.989 0-31.221 31.704-61.939 78.357-61.939 25.752 1.266 55.481 12.555 72.635 33.83 22.901-6.793 52.21-5.396 58.457-1.244 25.87-11.941 51.076-20.977 75.621-27.115 167.902-41.96 314.507 70.064 281.463 151.366-15.862 38.987-57.22 46.164-98.133 38.058-58.916-11.685-99.392-52.969-88.307-64.054v-.995c3.628-1.554 6.6-3.902 16.791.871 4.062 1.909 8.415 5.099 13.06 9.578 33.238 29.705 52.785 57.569 94.277 52.984 12.469-1.397 22.934-2.61 33.084-9.204 41.259-26.824 45.44-90.015-31.467-141.292-52.983-35.321-131.965-52.831-216.166-33.333-23.631 5.473-47.97 13.848-73.008 25.125 29.518 10.275 52.984 45.047 52.984 76.366 0 51.749-54.338 73.382-106.715 73.382-47.35 0-90.865-18.47-123.63-47.014-3.321-3.321-3.153-4.451-5.97-6.468-70.024 35.923-114.777 45.71-154.023 45.942-17.339-.102-35.753-2.07-56.947-7.333-5.263-21.194-7.23-39.608-7.333-56.947.232-39.245 10.019-83.999 45.942-154.023-2.018-2.817-3.147-2.649-6.468-5.97-28.543-32.765-47.014-76.279-47.014-123.63 0-52.377 21.633-106.715 73.382-106.715 31.319 0 66.091 23.466 76.366 52.984 11.276-25.038 19.651-49.377 25.125-73.008 19.498-84.2 1.988-163.183-33.333-216.166-51.277-76.906-114.468-72.726-141.292-31.467-6.594 10.15-7.807 20.615-9.204 33.084-4.585 41.492 23.279 61.038 52.984 94.276 4.478 4.645 7.669 8.998 9.578 13.06 4.773 10.19 2.425 13.162.871 16.791h-.995c-11.085 11.085-52.369-29.39-64.054-88.307-8.106-40.913-.929-82.271 38.058-98.133 81.302-33.045 193.326 113.56 151.367 281.463-6.137 24.545-15.174 49.75-27.115 75.621 4.153 6.247 5.55 35.556-1.244 58.457 21.276 17.154 32.564 46.883 33.831 72.635 0 46.653-30.719 78.357-61.939 78.357-18.442 0-37.446-8.693-51.989-18.905-47.096 55.345-55.255 96.794-56.668 139.595.559 16.972 2.18 33.729 6.868 51.225zm382.854-126.665c-25.992 11.729-34.262 15.286-48.756 23.134 0 2.974 2.4 16.538-3.607 28.731-8.958 18.197-24.516 23.756-30.223 23.756-9.939 0-12.65-9.329-6.219-13.931 6.436-4.584 15.477-6.078 23.383-7.213 11.9-5.005 12.935-16.329 12.935-29.105-62.028 33.371-72.835 41.785-121.391 66.666 31.99 36.686 90.72 42.615 137.933 29.228 41.701-11.81 95.282-46.091 79.227-85.571-4.474-10.992-13.174-20.013-23.258-26.74-5.721-3.812-12.398-6.797-20.024-8.955zM202.02 1213.239c-6.727-10.084-15.748-18.784-26.74-23.258-39.48-16.054-73.761 37.527-85.571 79.228-13.386 47.213-7.457 105.943 29.228 137.933 24.882-48.556 33.295-59.363 66.666-121.391-12.776 0-24.1 1.035-29.105 12.935-1.135 7.905-2.629 16.947-7.213 23.383-4.602 6.431-13.931 3.721-13.931-6.219 0-5.707 5.559-21.265 23.756-30.223 12.193-6.007 25.757-3.607 28.731-3.607 7.847-14.494 11.405-22.764 23.134-48.756-2.157-7.626-5.142-14.304-8.955-20.025zm256.937 274.473c-11.099-2.918-30.042-3.126-48.755 2.488 2.93 5.541 5.786 11.865 7.462 17.91 13.321-7.467 27.189-14.204 41.293-20.398zm-266.638-204.947c6.045 1.677 12.369 4.532 17.91 7.462 5.614-18.713 5.406-37.656 2.488-48.755-6.194 14.104-12.931 27.972-20.398 41.293zm213.405 208.679c-57.167 17.249-116.954 73.41-124.376 76.367 3.97 4.412 4.277 5.586 8.209 9.949 53.792-27.773 66.264-38.255 124.376-68.407-1.798-6.122-4.904-12.509-8.209-17.909zm-214.649-204.948c-30.152 58.112-40.634 70.585-68.407 124.376 4.363 3.932 5.538 4.239 9.95 8.209 2.957-7.422 59.118-67.209 76.367-124.376-5.4-3.304-11.787-6.411-17.91-8.209zm87.039 277.832c2.183-.865 1.762-1.591 3.98-2.487 35.184-28.14 77.382-61.421 120.396-74.874-28.488-32.052-87.894-41.851-122.635-10.323-27.276 24.768-22.013 57.255-1.741 87.684zm-54.328-143.755c31.528-34.741 21.729-94.147-10.323-122.635-13.453 43.014-46.734 85.212-74.874 120.396-.896 2.218-1.622 1.797-2.487 3.98 30.428 20.273 62.915 25.536 87.684-1.741zm5.823 184.053c14.703-5.156 28.17-11.095 56.218-25.372-4.167-4.692-5.553-6.121-7.712-9.204-13.187 11.798-30.988 24.953-48.506 34.576zm-99.229-182.311c-3.082-2.159-4.512-3.545-9.204-7.712-14.277 28.048-20.216 41.514-25.372 56.218 9.622-17.519 22.777-35.319 34.576-48.506zM1613.497 1616.117c-17.495 4.688-34.253 6.308-51.222 6.869-42.801-1.413-84.25-9.572-139.595-56.668 10.212-14.542 18.905-33.547 18.905-51.989 0-31.22-31.704-61.939-78.357-61.939-25.752 1.266-55.481 12.555-72.635 33.831-22.901-6.793-52.21-5.396-58.457-1.244-25.87-11.94-51.076-20.977-75.621-27.115-167.902-41.959-314.507 70.064-281.463 151.367 15.862 38.987 57.22 46.164 98.133 38.058 58.916-11.685 99.392-52.969 88.307-64.054v-.995c-3.628-1.554-6.6-3.902-16.791.871-4.062 1.909-8.415 5.099-13.06 9.578-33.238 29.705-52.785 57.569-94.277 52.984-12.469-1.397-22.934-2.61-33.084-9.204-41.259-26.824-45.44-90.015 31.467-141.292 52.983-35.321 131.965-52.831 216.166-33.333 23.631 5.473 47.97 13.848 73.008 25.125-29.518 10.275-52.984 45.047-52.984 76.366 0 51.749 54.338 73.382 106.715 73.382 47.35 0 90.865-18.47 123.63-47.014 3.321-3.321 3.153-4.451 5.97-6.468 70.024 35.922 114.777 45.71 154.023 45.942 17.339-.102 35.753-2.07 56.947-7.333 5.263-21.194 7.23-39.608 7.333-56.947-.232-39.245-10.019-83.999-45.942-154.023 2.018-2.817 3.147-2.649 6.468-5.97 28.543-32.765 47.014-76.279 47.014-123.63 0-52.377-21.633-106.715-73.382-106.715-31.319 0-66.091 23.466-76.366 52.984-11.276-25.038-19.651-49.377-25.125-73.008-19.498-84.2-1.988-163.183 33.332-216.166 51.277-76.906 114.468-72.726 141.292-31.467 6.594 10.15 7.807 20.615 9.204 33.084 4.585 41.492-23.279 61.038-52.984 94.277-4.478 4.645-7.669 8.998-9.578 13.06-4.773 10.19-2.425 13.162-.871 16.791h.995c11.085 11.085 52.369-29.39 64.054-88.307 8.105-40.913.929-82.271-38.058-98.133-81.302-33.044-193.326 113.561-151.366 281.463 6.138 24.545 15.174 49.75 27.115 75.621-4.153 6.247-5.55 35.556 1.244 58.457-21.276 17.154-32.564 46.883-33.831 72.635 0 46.653 30.719 78.357 61.94 78.357 18.442 0 37.446-8.693 51.989-18.905 47.096 55.345 55.255 96.794 56.669 139.595-.562 16.969-2.183 33.726-6.871 51.222zm-382.854-126.664c25.992 11.729 34.262 15.286 48.756 23.134 0 2.974-2.4 16.538 3.607 28.731 8.958 18.197 24.516 23.756 30.223 23.756 9.939 0 12.65-9.329 6.219-13.931-6.436-4.584-15.477-6.078-23.383-7.213-11.9-5.005-12.935-16.329-12.935-29.105 62.028 33.371 72.835 41.784 121.391 66.666-31.99 36.686-90.72 42.615-137.933 29.228-41.701-11.81-95.282-46.091-79.228-85.571 4.474-10.992 13.174-20.013 23.258-26.74 5.722-3.813 12.399-6.798 20.025-8.955zm265.145-276.215c6.727-10.084 15.748-18.784 26.74-23.258 39.48-16.054 73.761 37.527 85.571 79.227 13.386 47.213 7.458 105.943-29.228 137.933-24.882-48.556-33.295-59.363-66.666-121.391 12.776 0 24.1 1.035 29.105 12.935 1.135 7.905 2.629 16.947 7.213 23.383 4.602 6.431 13.931 3.721 13.931-6.219 0-5.707-5.559-21.265-23.756-30.223-12.193-6.007-25.757-3.607-28.731-3.607-7.847-14.494-11.405-22.764-23.134-48.756 2.157-7.625 5.143-14.303 8.955-20.024zm-256.937 274.473c11.099-2.918 30.042-3.126 48.755 2.488-2.93 5.541-5.786 11.865-7.462 17.91-13.32-7.467-27.188-14.204-41.293-20.398zm266.639-204.947c-6.045 1.676-12.369 4.532-17.91 7.462-5.614-18.713-5.406-37.656-2.488-48.755 6.193 14.105 12.93 27.973 20.398 41.293zm-213.406 208.679c57.167 17.249 116.955 73.41 124.376 76.367-3.97 4.412-4.277 5.587-8.209 9.95-53.792-27.773-66.264-38.255-124.376-68.407 1.799-6.122 4.905-12.51 8.209-17.91zm214.649-204.948c30.152 58.112 40.634 70.585 68.407 124.376-4.363 3.932-5.538 4.239-9.95 8.209-2.957-7.422-59.118-67.209-76.367-124.376 5.4-3.304 11.788-6.41 17.91-8.209zm-87.038 277.832c-2.183-.865-1.762-1.591-3.98-2.487-35.184-28.14-77.382-61.421-120.396-74.874 28.488-32.052 87.894-41.851 122.635-10.323 27.276 24.768 22.013 57.256 1.741 87.684zm54.328-143.754c-31.528-34.741-21.729-94.147 10.323-122.635 13.453 43.014 46.734 85.212 74.874 120.396.896 2.218 1.622 1.797 2.487 3.98-30.428 20.272-62.915 25.535-87.684-1.741zm-5.823 184.052c-14.703-5.156-28.17-11.095-56.218-25.372 4.167-4.693 5.553-6.122 7.712-9.204 13.187 11.798 30.988 24.953 48.506 34.576zm99.229-182.311c3.082-2.159 4.511-3.545 9.204-7.712 14.277 28.048 20.216 41.514 25.372 56.218-9.622-17.519-22.777-35.319-34.576-48.506zM84.311 84.391c17.495-4.688 34.253-6.308 51.223-6.869 42.801 1.413 84.25 9.572 139.595 56.668-10.212 14.543-18.905 33.547-18.905 51.989 0 31.221 31.705 61.939 78.357 61.939 25.752-1.266 55.481-12.555 72.635-33.831 22.901 6.793 52.21 5.396 58.457 1.244 25.87 11.941 51.076 20.977 75.621 27.115 167.902 41.959 314.507-70.064 281.463-151.367-15.862-38.987-57.22-46.164-98.133-38.058-58.916 11.685-99.392 52.969-88.307 64.054v.995c3.628 1.554 6.6 3.902 16.791-.871 4.062-1.909 8.415-5.099 13.06-9.578 33.238-29.705 52.784-57.569 94.276-52.984 12.469 1.397 22.934 2.61 33.084 9.204 41.259 26.824 45.44 90.015-31.467 141.292-52.983 35.321-131.965 52.831-216.166 33.333-23.631-5.473-47.97-13.848-73.008-25.125 29.518-10.275 52.984-45.047 52.984-76.366 0-51.749-54.338-73.382-106.715-73.382-47.35 0-90.865 18.47-123.63 47.014-3.321 3.321-3.153 4.451-5.97 6.468-70.024-35.923-114.778-45.71-154.023-45.942-17.339.102-35.753 2.07-56.947 7.333-5.263 21.194-7.23 39.608-7.333 56.947.232 39.245 10.019 83.999 45.942 154.023-2.018 2.817-3.147 2.649-6.468 5.97-28.543 32.765-47.014 76.279-47.014 123.63 0 52.377 21.633 106.715 73.382 106.715 31.319 0 66.091-23.466 76.366-52.984 11.276 25.038 19.651 49.377 25.125 73.008 19.498 84.2 1.988 163.183-33.332 216.166-51.277 76.906-114.468 72.726-141.292 31.467-6.594-10.15-7.807-20.615-9.204-33.084-4.585-41.492 23.279-61.038 52.984-94.277 4.478-4.645 7.669-8.998 9.578-13.06 4.773-10.19 2.425-13.162.871-16.791h-.995c-11.085-11.085-52.369 29.39-64.054 88.307-8.105 40.913-.929 82.271 38.058 98.133 81.303 33.044 193.326-113.561 151.366-281.463-6.138-24.545-15.174-49.75-27.115-75.621 4.153-6.247 5.55-35.556-1.244-58.457 21.276-17.154 32.564-46.883 33.831-72.635 0-46.653-30.719-78.357-61.939-78.357-18.442 0-37.446 8.693-51.989 18.905-47.096-55.345-55.255-96.794-56.669-139.595.561-16.969 2.182-33.726 6.87-51.222zm382.854 126.664c-25.992-11.729-34.262-15.286-48.756-23.134 0-2.974 2.4-16.538-3.607-28.731-8.958-18.197-24.516-23.756-30.223-23.756-9.939 0-12.65 9.329-6.219 13.931 6.436 4.584 15.477 6.078 23.383 7.213 11.9 5.005 12.935 16.329 12.935 29.105-62.028-33.371-72.835-41.784-121.391-66.666 31.99-36.686 90.72-42.615 137.933-29.228 41.701 11.81 95.282 46.091 79.228 85.571-4.474 10.992-13.174 20.013-23.258 26.74-5.722 3.813-12.399 6.798-20.025 8.955zM202.019 487.27c-6.727 10.084-15.748 18.784-26.74 23.258-39.48 16.054-73.761-37.527-85.571-79.227-13.387-47.213-7.458-105.943 29.228-137.933 24.882 48.556 33.295 59.363 66.666 121.391-12.776 0-24.1-1.035-29.105-12.935-1.135-7.905-2.629-16.947-7.213-23.383-4.602-6.431-13.931-3.721-13.931 6.219 0 5.707 5.559 21.265 23.756 30.223 12.193 6.007 25.757 3.607 28.731 3.607 7.847 14.494 11.405 22.764 23.134 48.756-2.156 7.626-5.142 14.303-8.955 20.024zm256.938-274.473c-11.099 2.918-30.042 3.126-48.755-2.488 2.93-5.541 5.786-11.865 7.462-17.91 13.32 7.467 27.188 14.204 41.293 20.398zM192.318 417.744c6.045-1.676 12.369-4.532 17.91-7.462 5.614 18.713 5.406 37.656 2.488 48.755-6.193-14.104-12.931-27.972-20.398-41.293zm213.406-208.679c-57.167-17.249-116.955-73.41-124.376-76.367 3.97-4.412 4.277-5.586 8.209-9.95 53.792 27.773 66.264 38.255 124.376 68.407-1.799 6.122-4.905 12.51-8.209 17.91zM191.075 414.013c-30.152-58.112-40.634-70.585-68.407-124.376 4.363-3.932 5.538-4.239 9.95-8.209 2.957 7.422 59.118 67.209 76.367 124.376-5.4 3.304-11.788 6.411-17.91 8.209zm87.038-277.832c2.183.865 1.762 1.591 3.98 2.487 35.185 28.14 77.383 61.421 120.396 74.874-28.488 32.052-87.894 41.851-122.635 10.323-27.276-24.768-22.013-57.255-1.741-87.684zm-54.328 143.755c31.528 34.741 21.729 94.147-10.323 122.635-13.453-43.014-46.734-85.212-74.874-120.396-.896-2.218-1.622-1.797-2.487-3.98 30.428-20.273 62.916-25.536 87.684 1.741zm5.822-184.053c14.703 5.156 28.17 11.095 56.218 25.372-4.167 4.692-5.553 6.121-7.712 9.204-13.186-11.798-30.987-24.953-48.506-34.576zm-99.228 182.311c-3.082 2.159-4.512 3.545-9.204 7.712-14.277-28.048-20.216-41.514-25.372-56.218 9.622 17.519 22.777 35.32 34.576 48.506z"
        ></motion.path>
      </svg>
    </InView>
  );
}

export default ImageFrame;
