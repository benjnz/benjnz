// Interval in minutes
const interval = 120;

// Event categories and their corresponding activities
const eventCategories = {
    "Cooking/Eating": ["Pan Draw", "Cutlery Cupboard", "Fridge"],
    "Kitchen Light": ["Kitchen Light"],
    "Hobbies/Recreation/Socialising": ["Reading", "Front Door"]
};

// Category multipliers
const categoryMultipliers = {
    "Cooking/Eating": 2,
    "Kitchen Light": 10,
    "Hobbies/Recreation/Socialising": 25
};

// Sample input data
const data = [
    // Timestamp, Time, Activity (e.g., "15-08-2024 08:30:00, Reading")
"15-08-2023, 13:52:22, Kitchen Light",
"15-08-2023, 15:02:28, Cutlery Cupboard",
"15-08-2023, 15:47:53, Cutlery Cupboard",
"15-08-2023, 16:45:27, Kitchen Light",
"15-08-2023, 17:40:00, Cutlery Cupboard",
"15-08-2023, 17:40:03, Cutlery Cupboard",
"15-08-2023, 18:39:27, Cutlery Cupboard",
"15-08-2023, 18:39:50, Cutlery Cupboard",
"15-08-2023, 18:44:28, Kitchen Light",
"15-08-2023, 19:26:59, Cutlery Cupboard",
"15-08-2023, 19:27:00, Cutlery Cupboard",
"15-08-2023, 19:27:34, Cutlery Cupboard",
"15-08-2023, 22:55:03, Kitchen Light",
"16-08-2023, 08:13:31, Kitchen Light",
"16-08-2023, 08:31:43, Cutlery Cupboard",
"16-08-2023, 08:32:21, Cutlery Cupboard",
"16-08-2023, 08:39:32, Pan Draw",
"16-08-2023, 08:39:41, Pan Draw",
"16-08-2023, 08:40:21, Fridge",
"16-08-2023, 08:51:28, Cutlery Cupboard",
"16-08-2023, 08:53:22, Cutlery Cupboard",
"16-08-2023, 08:55:44, Cutlery Cupboard",
"16-08-2023, 08:55:48, Cutlery Cupboard",
"16-08-2023, 09:25:29, Pan Draw",
"16-08-2023, 09:25:43, Pan Draw",
"16-08-2023, 09:26:42, Cutlery Cupboard",
"16-08-2023, 09:26:45, Cutlery Cupboard",
"16-08-2023, 11:33:40, Cutlery Cupboard",
"16-08-2023, 11:34:04, Cutlery Cupboard",
"16-08-2023, 16:20:14, Cutlery Cupboard",
"16-08-2023, 16:20:20, Cutlery Cupboard",
"16-08-2023, 16:24:54, Cutlery Cupboard",
"16-08-2023, 16:25:20, Cutlery Cupboard",
"16-08-2023, 16:59:12, Cutlery Cupboard",
"16-08-2023, 16:59:13, Cutlery Cupboard",
"16-08-2023, 17:39:15, Kitchen Light",
"16-08-2023, 18:32:36, Cutlery Cupboard",
"16-08-2023, 18:32:43, Cutlery Cupboard",
"16-08-2023, 19:58:28, Kitchen Light",
"16-08-2023, 21:17:07, Kitchen Light",
"16-08-2023, 21:50:27, Kitchen Light",
"16-08-2023, 21:50:28, Kitchen Light",
"16-08-2023, 22:19:25, Kitchen Light",
"16-08-2023, 23:47:42, Kitchen Light",
"16-08-2023, 23:56:59, Cutlery Cupboard",
"16-08-2023, 23:57:06, Cutlery Cupboard",
"17-08-2023, 09:31:28, Kitchen Light",
"17-08-2023, 09:39:40, Pan Draw",
"17-08-2023, 09:39:54, Pan Draw",
"17-08-2023, 09:50:53, Cutlery Cupboard",
"17-08-2023, 09:51:09, Cutlery Cupboard",
"17-08-2023, 14:49:57, Kitchen Light",
"17-08-2023, 16:49:41, Kitchen Light",
"17-08-2023, 18:42:07, Kitchen Light",
"17-08-2023, 19:05:16, Pan Draw",
"17-08-2023, 19:05:27, Pan Draw",
"17-08-2023, 19:05:29, Cutlery Cupboard",
"17-08-2023, 19:08:05, Cutlery Cupboard",
"17-08-2023, 19:12:20, Cutlery Cupboard",
"17-08-2023, 19:14:03, Cutlery Cupboard",
"17-08-2023, 19:15:27, Cutlery Cupboard",
"17-08-2023, 19:15:28, Cutlery Cupboard",
"17-08-2023, 20:57:35, Kitchen Light",
"18-08-2023, 00:15:43, Kitchen Light",
"18-08-2023, 00:26:40, Cutlery Cupboard",
"18-08-2023, 00:26:45, Cutlery Cupboard",
"18-08-2023, 10:22:34, Kitchen Light",
"18-08-2023, 11:23:29, Pan Draw",
"18-08-2023, 11:23:31, Pan Draw",
"18-08-2023, 11:23:32, Pan Draw",
"18-08-2023, 11:23:46, Pan Draw",
"18-08-2023, 11:28:36, Cutlery Cupboard",
"18-08-2023, 11:28:45, Cutlery Cupboard",
"18-08-2023, 12:02:44, Pan Draw",
"18-08-2023, 12:02:54, Pan Draw",
"18-08-2023, 15:39:44, Kitchen Light",
"18-08-2023, 16:32:20, Kitchen Light",
"18-08-2023, 17:05:48, Cutlery Cupboard",
"18-08-2023, 17:06:04, Cutlery Cupboard",
"18-08-2023, 17:06:47, Cutlery Cupboard",
"18-08-2023, 17:06:48, Cutlery Cupboard",
"18-08-2023, 17:07:00, Cutlery Cupboard",
"18-08-2023, 17:12:31, Cutlery Cupboard",
"18-08-2023, 17:13:08, Cutlery Cupboard",
"18-08-2023, 17:13:56, Cutlery Cupboard",
"18-08-2023, 17:14:59, Cutlery Cupboard",
"18-08-2023, 17:30:03, Cutlery Cupboard",
"18-08-2023, 17:30:07, Cutlery Cupboard",
"18-08-2023, 17:41:55, Pan Draw",
"18-08-2023, 17:42:06, Pan Draw",
"18-08-2023, 17:43:14, Pan Draw",
"18-08-2023, 17:43:21, Pan Draw",
"18-08-2023, 17:55:34, Cutlery Cupboard",
"18-08-2023, 17:55:42, Cutlery Cupboard",
"18-08-2023, 17:59:24, Cutlery Cupboard",
"18-08-2023, 17:59:31, Cutlery Cupboard",
"18-08-2023, 18:02:00, Cutlery Cupboard",
"18-08-2023, 18:02:05, Cutlery Cupboard",
"18-08-2023, 18:26:21, Cutlery Cupboard",
"18-08-2023, 18:26:27, Cutlery Cupboard",
"18-08-2023, 18:40:19, Cutlery Cupboard",
"18-08-2023, 18:45:36, Cutlery Cupboard",
"18-08-2023, 18:47:05, Cutlery Cupboard",
"18-08-2023, 18:47:18, Cutlery Cupboard",
"18-08-2023, 18:48:26, Pan Draw",
"18-08-2023, 18:48:37, Pan Draw",
"18-08-2023, 18:57:57, Cutlery Cupboard",
"18-08-2023, 18:58:02, Cutlery Cupboard",
"18-08-2023, 19:45:32, Pan Draw",
"18-08-2023, 19:45:34, Pan Draw",
"18-08-2023, 20:57:39, Kitchen Light",
"18-08-2023, 21:27:44, Kitchen Light",
"18-08-2023, 22:53:12, Kitchen Light",
"18-08-2023, 23:15:04, Pan Draw",
"18-08-2023, 23:15:15, Pan Draw",
"18-08-2023, 23:30:34, Cutlery Cupboard",
"18-08-2023, 23:30:54, Cutlery Cupboard",
"19-08-2023, 06:10:03, Kitchen Light",
"19-08-2023, 08:43:00, Kitchen Light",
"19-08-2023, 08:48:47, Cutlery Cupboard",
"19-08-2023, 08:48:53, Cutlery Cupboard",
"19-08-2023, 08:57:59, Cutlery Cupboard",
"19-08-2023, 08:58:02, Cutlery Cupboard",
"19-08-2023, 09:02:30, Cutlery Cupboard",
"19-08-2023, 09:02:55, Cutlery Cupboard",
"19-08-2023, 09:02:59, Cutlery Cupboard",
"19-08-2023, 09:03:02, Cutlery Cupboard",
"19-08-2023, 18:07:14, Kitchen Light",
"19-08-2023, 20:01:52, Kitchen Light",
"19-08-2023, 22:44:14, Kitchen Light",
"19-08-2023, 22:53:34, Cutlery Cupboard",
"19-08-2023, 22:53:37, Cutlery Cupboard",
"20-08-2023, 09:15:01, Cutlery Cupboard",
"20-08-2023, 09:15:12, Cutlery Cupboard",
"20-08-2023, 09:20:25, Kitchen Light",
"20-08-2023, 09:25:07, Reading",
"20-08-2023, 10:49:02, Cutlery Cupboard",
"20-08-2023, 10:49:19, Cutlery Cupboard",
"20-08-2023, 15:17:40, Cutlery Cupboard",
"20-08-2023, 15:18:03, Cutlery Cupboard",
"20-08-2023, 15:18:16, Kitchen Light",
"20-08-2023, 15:56:53, Pan Draw",
"20-08-2023, 15:56:58, Pan Draw",
"20-08-2023, 15:56:59, Cutlery Cupboard",
"20-08-2023, 15:57:01, Cutlery Cupboard",
"20-08-2023, 16:24:55, Cutlery Cupboard",
"20-08-2023, 16:25:31, Cutlery Cupboard",
"20-08-2023, 17:07:48, Kitchen Light",
"20-08-2023, 17:11:21, Pan Draw",
"20-08-2023, 17:11:23, Pan Draw",
"20-08-2023, 17:27:26, Cutlery Cupboard",
"20-08-2023, 17:27:28, Cutlery Cupboard",
"20-08-2023, 17:28:46, Kitchen Light",
"20-08-2023, 17:34:20, Pan Draw",
"20-08-2023, 17:34:24, Pan Draw",
"20-08-2023, 18:06:01, Cutlery Cupboard",
"20-08-2023, 18:06:06, Cutlery Cupboard",
"20-08-2023, 18:07:46, Cutlery Cupboard",
"20-08-2023, 18:08:02, Cutlery Cupboard",
"20-08-2023, 18:34:27, Cutlery Cupboard",
"20-08-2023, 18:34:38, Cutlery Cupboard",
"20-08-2023, 18:37:42, Reading",
"20-08-2023, 20:57:47, Kitchen Light",
"20-08-2023, 21:18:35, Kitchen Light",
"20-08-2023, 22:57:13, Kitchen Light",
"20-08-2023, 23:00:56, Cutlery Cupboard",
"20-08-2023, 23:00:59, Cutlery Cupboard",
"21-08-2023, 09:57:57, Kitchen Light",
"21-08-2023, 10:00:27, Cutlery Cupboard",
"21-08-2023, 10:25:24, Cutlery Cupboard",
"21-08-2023, 12:52:16, Cutlery Cupboard",
"21-08-2023, 12:52:24, Cutlery Cupboard",
"21-08-2023, 13:22:23, Reading",
"21-08-2023, 16:36:20, Kitchen Light",
"21-08-2023, 16:43:27, Cutlery Cupboard",
"21-08-2023, 17:06:51, Cutlery Cupboard",
"21-08-2023, 17:10:11, Kitchen Light",
"21-08-2023, 18:05:23, Kitchen Light",
"21-08-2023, 18:06:15, Cutlery Cupboard",
"21-08-2023, 18:06:33, Cutlery Cupboard",
"21-08-2023, 18:24:16, Pan Draw",
"21-08-2023, 18:24:18, Pan Draw",
"21-08-2023, 21:08:06, Kitchen Light",
"21-08-2023, 23:07:14, Kitchen Light",
"21-08-2023, 23:26:36, Cutlery Cupboard",
"21-08-2023, 23:26:41, Cutlery Cupboard",
"22-08-2023, 08:50:27, Kitchen Light",
"22-08-2023, 09:08:46, Cutlery Cupboard",
"22-08-2023, 09:18:24, Cutlery Cupboard",
"22-08-2023, 12:13:38, Kitchen Light",
"22-08-2023, 12:33:06, Cutlery Cupboard",
"22-08-2023, 12:33:11, Cutlery Cupboard",
"22-08-2023, 12:33:22, Cutlery Cupboard",
"22-08-2023, 12:33:31, Cutlery Cupboard",
"22-08-2023, 14:16:59, Kitchen Light",
"22-08-2023, 14:17:43, Cutlery Cupboard",
"22-08-2023, 14:17:45, Cutlery Cupboard",
"22-08-2023, 14:20:16, Front Door",
"22-08-2023, 15:24:06, Pan Draw",
"22-08-2023, 15:24:14, Pan Draw",
"22-08-2023, 15:45:52, Front Door",
"22-08-2023, 16:31:40, Front Door",
"22-08-2023, 17:01:53, Cutlery Cupboard",
"22-08-2023, 17:02:09, Cutlery Cupboard",
"22-08-2023, 17:04:18, Laundry Room",
"22-08-2023, 17:17:50, Pan Draw",
"22-08-2023, 17:17:57, Pan Draw",
"22-08-2023, 17:17:59, Pan Draw",
"22-08-2023, 17:18:00, Pan Draw",
"22-08-2023, 17:23:33, Cutlery Cupboard",
"22-08-2023, 17:23:37, Cutlery Cupboard",
"22-08-2023, 18:06:15, Cutlery Cupboard",
"22-08-2023, 18:06:54, Cutlery Cupboard",
"22-08-2023, 18:15:07, Cutlery Cupboard",
"22-08-2023, 18:15:21, Cutlery Cupboard",
"22-08-2023, 18:23:07, Front Door",
"22-08-2023, 18:30:04, Kitchen Light",
"22-08-2023, 18:37:18, Cutlery Cupboard",
"22-08-2023, 18:37:28, Cutlery Cupboard",
"22-08-2023, 21:57:18, Kitchen Light",
"22-08-2023, 22:46:30, Kitchen Light",
"22-08-2023, 22:52:40, Cutlery Cupboard",
"22-08-2023, 22:52:48, Cutlery Cupboard",
"23-08-2023, 08:40:24, Kitchen Light",
"23-08-2023, 08:41:33, Pan Draw",
"23-08-2023, 08:42:18, Pan Draw",
"23-08-2023, 08:46:23, Cutlery Cupboard",
"23-08-2023, 08:47:10, Cutlery Cupboard",
"23-08-2023, 08:54:23, Cutlery Cupboard",
"23-08-2023, 08:54:32, Cutlery Cupboard",
"23-08-2023, 08:58:24, Pan Draw",
"23-08-2023, 08:58:28, Pan Draw",
"23-08-2023, 09:08:25, Kitchen Light",
"23-08-2023, 10:05:09, Cutlery Cupboard",
"23-08-2023, 10:05:33, Cutlery Cupboard",
"23-08-2023, 10:09:44, Cutlery Cupboard",
"23-08-2023, 10:09:47, Cutlery Cupboard",
"23-08-2023, 13:12:28, Cutlery Cupboard",
"23-08-2023, 13:12:33, Cutlery Cupboard",
"23-08-2023, 18:51:19, Cutlery Cupboard",
"23-08-2023, 18:51:21, Kitchen Light",
"23-08-2023, 18:51:36, Cutlery Cupboard",
"23-08-2023, 19:10:44, Cutlery Cupboard",
"23-08-2023, 19:10:59, Cutlery Cupboard",
"23-08-2023, 19:36:06, Cutlery Cupboard",
"23-08-2023, 19:36:13, Cutlery Cupboard",
"23-08-2023, 19:37:11, Cutlery Cupboard",
"23-08-2023, 19:59:32, Cutlery Cupboard",
"23-08-2023, 20:48:39, Kitchen Light",
"23-08-2023, 22:49:28, Kitchen Light",
"23-08-2023, 22:50:50, Cutlery Cupboard",
"23-08-2023, 22:50:56, Cutlery Cupboard",
"24-08-2023, 09:54:20, Kitchen Light",
"24-08-2023, 10:11:34, Cutlery Cupboard",
"24-08-2023, 10:11:53, Cutlery Cupboard",
"24-08-2023, 14:32:23, Cutlery Cupboard",
"24-08-2023, 14:33:21, Cutlery Cupboard",
"24-08-2023, 14:34:52, Pan Draw",
"24-08-2023, 14:34:53, Cutlery Cupboard",
"24-08-2023, 14:34:56, Cutlery Cupboard",
"24-08-2023, 14:34:58, Cutlery Cupboard",
"24-08-2023, 14:35:00, Cutlery Cupboard",
"24-08-2023, 14:35:22, Pan Draw",
"24-08-2023, 14:59:30, Cutlery Cupboard",
"24-08-2023, 14:59:38, Cutlery Cupboard",
"24-08-2023, 17:19:41, Cutlery Cupboard",
"24-08-2023, 17:19:51, Cutlery Cupboard",
"24-08-2023, 18:50:38, Kitchen Light",
"24-08-2023, 18:53:40, Cutlery Cupboard",
"24-08-2023, 18:54:30, Cutlery Cupboard",
"24-08-2023, 18:54:31, Cutlery Cupboard",
"24-08-2023, 18:55:06, Pan Draw",
"24-08-2023, 18:55:08, Cutlery Cupboard",
"24-08-2023, 18:56:02, Pan Draw",
"24-08-2023, 18:56:03, Cutlery Cupboard",
"24-08-2023, 18:58:07, Cutlery Cupboard",
"24-08-2023, 18:58:13, Cutlery Cupboard",
"24-08-2023, 18:59:05, Pan Draw",
"24-08-2023, 18:59:11, Pan Draw",
"24-08-2023, 19:25:47, Cutlery Cupboard",
"24-08-2023, 19:26:09, Cutlery Cupboard",
"24-08-2023, 19:55:18, Cutlery Cupboard",
"24-08-2023, 19:55:59, Cutlery Cupboard",
"24-08-2023, 23:10:35, Kitchen Light",
"24-08-2023, 23:16:59, Cutlery Cupboard",
"24-08-2023, 23:17:03, Cutlery Cupboard",
"25-08-2023, 08:45:30, Kitchen Light",
"25-08-2023, 09:23:56, Cutlery Cupboard",
"25-08-2023, 09:24:00, Cutlery Cupboard",
"25-08-2023, 10:04:56, Kitchen Light",
"25-08-2023, 13:16:06, Kitchen Light",
"25-08-2023, 13:36:03, Cutlery Cupboard",
"25-08-2023, 13:36:07, Cutlery Cupboard",
"25-08-2023, 15:04:30, Pan Draw",
"25-08-2023, 15:04:34, Pan Draw",
"25-08-2023, 18:18:25, Kitchen Light",
"25-08-2023, 18:30:29, Pan Draw",
"25-08-2023, 18:30:36, Pan Draw",
"25-08-2023, 18:56:12, Cutlery Cupboard",
"25-08-2023, 18:56:48, Cutlery Cupboard",
"25-08-2023, 20:07:43, Cutlery Cupboard",
"25-08-2023, 20:07:49, Cutlery Cupboard",
"25-08-2023, 20:44:45, Cutlery Cupboard",
"25-08-2023, 20:44:47, Cutlery Cupboard",
"25-08-2023, 20:45:21, Cutlery Cupboard",
"25-08-2023, 20:45:44, Cutlery Cupboard",
"25-08-2023, 21:30:54, Kitchen Light",
"25-08-2023, 22:48:57, Kitchen Light",
"25-08-2023, 22:57:09, Cutlery Cupboard",
"25-08-2023, 22:57:12, Cutlery Cupboard",
"26-08-2023, 09:26:37, Kitchen Light",
"26-08-2023, 13:38:35, Kitchen Light",
"26-08-2023, 15:46:18, Kitchen Light",
"26-08-2023, 17:46:42, Kitchen Light",
"26-08-2023, 18:06:49, Pan Draw",
"26-08-2023, 18:06:52, Pan Draw",
"26-08-2023, 18:27:47, Cutlery Cupboard",
"26-08-2023, 18:27:50, Cutlery Cupboard",
"26-08-2023, 18:35:00, Cutlery Cupboard",
"26-08-2023, 18:35:31, Cutlery Cupboard",
"26-08-2023, 18:45:02, Cutlery Cupboard",
"26-08-2023, 18:45:07, Cutlery Cupboard",
"26-08-2023, 18:52:22, Cutlery Cupboard",
"26-08-2023, 18:52:27, Cutlery Cupboard",
"26-08-2023, 18:54:11, Cutlery Cupboard",
"26-08-2023, 18:54:21, Cutlery Cupboard",
"26-08-2023, 19:21:32, Cutlery Cupboard",
"26-08-2023, 19:21:37, Cutlery Cupboard",
"26-08-2023, 22:26:56, Kitchen Light",
"27-08-2023, 08:58:43, Kitchen Light",
"27-08-2023, 09:05:09, Cutlery Cupboard",
"27-08-2023, 09:05:40, Cutlery Cupboard",
"27-08-2023, 13:20:41, Cutlery Cupboard",
"27-08-2023, 13:21:43, Cutlery Cupboard",
"27-08-2023, 14:22:47, Cutlery Cupboard",
"27-08-2023, 14:22:51, Cutlery Cupboard",
"27-08-2023, 18:09:32, Pan Draw",
"27-08-2023, 18:09:39, Pan Draw",
"27-08-2023, 18:15:24, Cutlery Cupboard",
"27-08-2023, 18:15:33, Cutlery Cupboard",
"27-08-2023, 18:57:42, Kitchen Light",
"27-08-2023, 19:57:58, Kitchen Light",
"27-08-2023, 20:04:24, Cutlery Cupboard",
"27-08-2023, 20:04:45, Cutlery Cupboard",
"27-08-2023, 23:16:09, Kitchen Light",
"27-08-2023, 23:21:06, Cutlery Cupboard",
"27-08-2023, 23:21:12, Cutlery Cupboard",
"27-08-2023, 23:26:20, Cutlery Cupboard",
"27-08-2023, 23:26:24, Cutlery Cupboard",
"27-08-2023, 23:53:02, Kitchen Light",
"28-08-2023, 08:35:24, Kitchen Light",
"28-08-2023, 11:20:43, Cutlery Cupboard",
"28-08-2023, 11:20:48, Cutlery Cupboard",
"28-08-2023, 11:21:32, Cutlery Cupboard",
"28-08-2023, 11:21:36, Cutlery Cupboard",
"28-08-2023, 11:21:51, Pan Draw",
"28-08-2023, 11:21:53, Pan Draw",
"28-08-2023, 11:40:35, Cutlery Cupboard",
"28-08-2023, 11:40:53, Cutlery Cupboard",
"28-08-2023, 11:49:14, Pan Draw",
"28-08-2023, 11:49:53, Pan Draw",
"28-08-2023, 12:51:01, Reading",
"28-08-2023, 13:25:38, Cutlery Cupboard",
"28-08-2023, 13:25:43, Cutlery Cupboard",
"28-08-2023, 14:06:39, Pan Draw",
"28-08-2023, 14:06:47, Pan Draw",
"28-08-2023, 14:10:30, Cutlery Cupboard",
"28-08-2023, 14:12:47, Cutlery Cupboard",
"28-08-2023, 14:12:57, Cutlery Cupboard",
"28-08-2023, 14:16:01, Cutlery Cupboard",
"28-08-2023, 14:16:16, Cutlery Cupboard",
"28-08-2023, 18:19:50, Pan Draw",
"28-08-2023, 18:20:03, Pan Draw",
"28-08-2023, 18:44:49, Kitchen Light",
"28-08-2023, 18:51:54, Pan Draw",
"28-08-2023, 18:51:56, Pan Draw",
"28-08-2023, 18:54:40, Cutlery Cupboard",
"28-08-2023, 18:55:09, Cutlery Cupboard",
"28-08-2023, 19:30:16, Cutlery Cupboard",
"28-08-2023, 23:02:04, Kitchen Light",
"28-08-2023, 23:14:30, Cutlery Cupboard",
"28-08-2023, 23:14:55, Cutlery Cupboard"
];

// Function to categorize activity
function categorizeActivity(activity) {
    const eventCategories = {
        "Cooking/Eating": ["Pan Draw", "Cutlery Cupboard", "Fridge"],
        "Kitchen Light": ["Kitchen Light"],
        "Hobbies/Recreation/Socialising": ["Reading", "Front Door"]
    };
    
    for (const [category, activities] of Object.entries(eventCategories)) {
        if (activities.includes(activity)) {
            return category;
        }
    }
    return "Other";
}

// Convert string timestamp to JavaScript Date object and categorize activity
const parsedData = data.map(item => {
    const [datePart, timePart, activity] = item.split(", ");
    
    // Reformat date to YYYY-MM-DD format and create Date object
    const [day, month, year] = datePart.split("-").reverse();  // Reversing to [YYYY, MM, DD]
    const formattedDate = `${year}-${month}-${day}T${timePart}`;
    
    // Create Date object
    const dateTime = new Date(formattedDate);
    
    // Validate if the dateTime is a valid Date object
    if (isNaN(dateTime)) {
        console.error(`Invalid date format for: ${item}`);
        return null;  // Handle invalid date case
    }

    // Get category of activity
    const category = categorizeActivity(activity);
    
    return { timestamp: dateTime, activity, category };
}).filter(item => item !== null);  // Remove null values from invalid date rows

console.log(parsedData);

// Categorize activities based on eventCategories
function categorizeActivity(activity) {
    for (const [category, activities] of Object.entries(eventCategories)) {
        if (activities.includes(activity)) {
            return category;
        }
    }
    return "Other";  // Default category
}

// Group activities by day, hour, minute interval, and category
const intervalData = {};

parsedData.forEach(({ timestamp, activity, category }) => {
    const date = timestamp.toISOString().split("T")[0];  // Extract just the date
    const hour = timestamp.getHours();
    const minute = Math.floor(timestamp.getMinutes() / interval) * interval;
    
    // Initialize the data structure if it doesn't exist yet
    if (!intervalData[date]) intervalData[date] = {};
    if (!intervalData[date][hour]) intervalData[date][hour] = {};
    if (!intervalData[date][hour][minute]) intervalData[date][hour][minute] = {};

    if (!intervalData[date][hour][minute][category]) {
        intervalData[date][hour][minute][category] = 0;
    }

    intervalData[date][hour][minute][category] += 1;
});

// Apply category multipliers
Object.keys(intervalData).forEach(date => {
    Object.keys(intervalData[date]).forEach(hour => {
        Object.keys(intervalData[date][hour]).forEach(minute => {
            const dataPoint = intervalData[date][hour][minute];
            Object.keys(dataPoint).forEach(category => {
                dataPoint[category] *= categoryMultipliers[category] || 1;
            });
        });
    });
});

// Calculate average counts per time interval (hour, minute)
const avgCounts = {};
Object.keys(intervalData).forEach(date => {
    Object.keys(intervalData[date]).forEach(hour => {
        Object.keys(intervalData[date][hour]).forEach(minute => {
            Object.keys(intervalData[date][hour][minute]).forEach(category => {
                if (!avgCounts[hour]) avgCounts[hour] = {};
                if (!avgCounts[hour][minute]) avgCounts[hour][minute] = {};

                if (!avgCounts[hour][minute][category]) avgCounts[hour][minute][category] = 0;
                avgCounts[hour][minute][category] += intervalData[date][hour][minute][category];
            });
        });
    });
});

// Normalize data
const normalizedData = {};
const maxValue = Math.max(...Object.values(avgCounts).flatMap(hour => 
    Object.values(hour).flatMap(min => 
        Object.values(min).flatMap(value => value)
    )
));

// Normalize values by dividing by the max value
Object.keys(avgCounts).forEach(hour => {
    Object.keys(avgCounts[hour]).forEach(minute => {
        Object.keys(avgCounts[hour][minute]).forEach(category => {
            normalizedData[hour] = normalizedData[hour] || {};
            normalizedData[hour][minute] = normalizedData[hour][minute] || {};
            normalizedData[hour][minute][category] = avgCounts[hour][minute][category] / maxValue;
        });
    });
});

// D3.js Rendering: Render the heatmap

const svg = d3.select("svg.heatmap")
    .attr("width", 800)
    .attr("height", 400);

// Define categories and colors
const categories = Object.keys(categoryMultipliers);
const colorScale = d3.scaleSequential(d3.interpolateYlGnBu)
    .domain([0, 1]); // Normalize between 0 and 1

// Render heatmap bars
let y = d3.scaleBand()
    .domain(categories)
    .range([0, 400])
    .padding(0.1);

let x = d3.scaleBand()
    .domain(Object.keys(normalizedData))
    .range([0, 800])
    .padding(0.05);

svg.selectAll(".yAxis")
    .data(categories)
    .enter()
    .append("g")
    .attr("class", "yAxis")
    .attr("transform", d => `translate(0, ${y(d)})`)
    .call(d3.axisLeft(y));

svg.selectAll(".xAxis")
    .data(Object.keys(normalizedData))
    .enter()
    .append("g")
    .attr("class", "xAxis")
    .attr("transform", d => `translate(${x(d)}, 0)`)
    .call(d3.axisTop(x));

// Create heatmap cells for each category and time interval
svg.selectAll(".heatmap-cell")
    .data(Object.entries(normalizedData))
    .enter()
    .append("rect")
    .attr("class", "heatmap-cell")
    .attr("x", d => x(d[0]))
    .attr("y", d => y(d[1].category))
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .attr("fill", d => colorScale(d[1].value))
    .append("title")
    .text(d => `${d[1].category}: ${d[1].value.toFixed(2)}`);
