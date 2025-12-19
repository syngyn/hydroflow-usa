import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

// Comprehensive water hardness data from all state water hardness reports
const hardnessData = [
  // California cities
  { city: 'Anaheim', state: 'CA', zip: '92804', lat: 33.8366, lng: -117.9143, hardness: 127, level: 'hard' },
  { city: 'Bakersfield', state: 'CA', zip: '93307', lat: 35.3733, lng: -119.0187, hardness: 80, level: 'moderate' },
  { city: 'Burbank', state: 'CA', zip: '91501', lat: 34.1808, lng: -118.3090, hardness: 271, level: 'very_hard' },
  { city: 'Corona', state: 'CA', zip: '92882', lat: 33.8753, lng: -117.5664, hardness: 353, level: 'very_hard' },
  { city: 'Fresno', state: 'CA', zip: '93722', lat: 36.7378, lng: -119.7871, hardness: 123, level: 'hard' },
  { city: 'Fullerton', state: 'CA', zip: '92833', lat: 33.8704, lng: -117.9242, hardness: 254, level: 'very_hard' },
  { city: 'Glendale', state: 'CA', zip: '91205', lat: 34.1425, lng: -118.2551, hardness: 259, level: 'very_hard' },
  { city: 'Huntington Beach', state: 'CA', zip: '92647', lat: 33.6603, lng: -117.9992, hardness: 240, level: 'very_hard' },
  { city: 'Inglewood', state: 'CA', zip: '90301', lat: 33.9617, lng: -118.3531, hardness: 293, level: 'very_hard' },
  { city: 'Irvine', state: 'CA', zip: '92620', lat: 33.6846, lng: -117.8265, hardness: 152, level: 'hard' },
  { city: 'Long Beach', state: 'CA', zip: '90805', lat: 33.7701, lng: -118.1937, hardness: 137, level: 'hard' },
  { city: 'Los Angeles', state: 'CA', zip: '90011', lat: 34.0522, lng: -118.2437, hardness: 127, level: 'hard' },
  { city: 'Mecca', state: 'CA', zip: '92254', lat: 33.5731, lng: -116.0772, hardness: 393, level: 'very_hard' },
  { city: 'Modesto', state: 'CA', zip: '95355', lat: 37.6391, lng: -120.9969, hardness: 224, level: 'very_hard' },
  { city: 'Newport Beach', state: 'CA', zip: '92603', lat: 33.6189, lng: -117.9289, hardness: 274, level: 'very_hard' },
  { city: 'Oakland', state: 'CA', zip: '94601', lat: 37.8044, lng: -122.2712, hardness: 140, level: 'hard' },
  { city: 'Oceanside', state: 'CA', zip: '92057', lat: 33.1959, lng: -117.3795, hardness: 168, level: 'hard' },
  { city: 'Oxnard', state: 'CA', zip: '93033', lat: 34.1975, lng: -119.1771, hardness: 285, level: 'very_hard' },
  { city: 'Palm Desert', state: 'CA', zip: '92210', lat: 33.7222, lng: -116.3745, hardness: 361, level: 'very_hard' },
  { city: 'Pasadena', state: 'CA', zip: '91104', lat: 34.1478, lng: -118.1445, hardness: 255, level: 'very_hard' },
  { city: 'Redding', state: 'CA', zip: '96003', lat: 40.5865, lng: -122.3917, hardness: 31, level: 'soft' },
  { city: 'Redondo Beach', state: 'CA', zip: '90277', lat: 33.8492, lng: -118.3884, hardness: 370, level: 'very_hard' },
  { city: 'Riverside', state: 'CA', zip: '92503', lat: 33.9533, lng: -117.3962, hardness: 71, level: 'moderate' },
  { city: 'Sacramento', state: 'CA', zip: '95823', lat: 38.5816, lng: -121.4944, hardness: 150, level: 'hard' },
  { city: 'San Bernardino', state: 'CA', zip: '92407', lat: 34.1083, lng: -117.2898, hardness: 249, level: 'very_hard' },
  { city: 'San Diego', state: 'CA', zip: '92154', lat: 32.7157, lng: -117.1611, hardness: 241, level: 'very_hard' },
  { city: 'San Francisco', state: 'CA', zip: '94112', lat: 37.7749, lng: -122.4194, hardness: 47, level: 'soft' },
  { city: 'San Jose', state: 'CA', zip: '95123', lat: 37.3382, lng: -121.8863, hardness: 132, level: 'hard' },
  { city: 'Santa Barbara', state: 'CA', zip: '93101', lat: 34.4208, lng: -119.6982, hardness: 391, level: 'very_hard' },
  { city: 'Santa Maria', state: 'CA', zip: '93453', lat: 34.9530, lng: -120.4357, hardness: 235, level: 'very_hard' },
  { city: 'Stockton', state: 'CA', zip: '95206', lat: 37.9577, lng: -121.2908, hardness: 194, level: 'hard' },
  { city: 'Sunnyvale', state: 'CA', zip: '94087', lat: 37.3688, lng: -122.0363, hardness: 300, level: 'very_hard' },
  { city: 'Ventura', state: 'CA', zip: '93001', lat: 34.2746, lng: -119.2290, hardness: 666, level: 'very_hard' },
  
  // Texas cities
  { city: 'Amarillo', state: 'TX', zip: '79101', lat: 35.2220, lng: -101.8313, hardness: 248, level: 'very_hard' },
  { city: 'Abilene', state: 'TX', zip: '79601', lat: 32.4487, lng: -99.7331, hardness: 284, level: 'very_hard' },
  { city: 'Arlington', state: 'TX', zip: '76001', lat: 32.7357, lng: -97.1081, hardness: 94, level: 'moderate' },
  { city: 'Austin', state: 'TX', zip: '78703', lat: 30.2672, lng: -97.7431, hardness: 184, level: 'hard' },
  { city: 'Beaumont', state: 'TX', zip: '77701', lat: 30.0802, lng: -94.1266, hardness: 31, level: 'soft' },
  { city: 'Corpus Christi', state: 'TX', zip: '78401', lat: 27.8006, lng: -97.3964, hardness: 227, level: 'very_hard' },
  { city: 'Dallas', state: 'TX', zip: '75201', lat: 32.7767, lng: -96.7970, hardness: 140, level: 'hard' },
  { city: 'El Paso', state: 'TX', zip: '79901', lat: 31.7619, lng: -106.4850, hardness: 119, level: 'hard' },
  { city: 'Fort Worth', state: 'TX', zip: '76102', lat: 32.7555, lng: -97.3308, hardness: 140, level: 'hard' },
  { city: 'Galveston', state: 'TX', zip: '77550', lat: 29.3013, lng: -94.7977, hardness: 200, level: 'hard' },
  { city: 'Houston', state: 'TX', zip: '77002', lat: 29.7604, lng: -95.3698, hardness: 135, level: 'hard' },
  { city: 'Laredo', state: 'TX', zip: '78040', lat: 27.5306, lng: -99.4803, hardness: 260, level: 'very_hard' },
  { city: 'Lubbock', state: 'TX', zip: '79401', lat: 33.5779, lng: -101.8552, hardness: 243, level: 'very_hard' },
  { city: 'McAllen', state: 'TX', zip: '78501', lat: 26.2034, lng: -98.2300, hardness: 243, level: 'very_hard' },
  { city: 'Midland', state: 'TX', zip: '79701', lat: 31.9973, lng: -102.0779, hardness: 500, level: 'very_hard' },
  { city: 'Odessa', state: 'TX', zip: '79761', lat: 31.8457, lng: -102.3676, hardness: 360, level: 'very_hard' },
  { city: 'Plano', state: 'TX', zip: '75023', lat: 33.0198, lng: -96.6989, hardness: 146, level: 'hard' },
  { city: 'San Antonio', state: 'TX', zip: '78201', lat: 29.4241, lng: -98.4936, hardness: 357, level: 'very_hard' },
  { city: 'San Angelo', state: 'TX', zip: '76901', lat: 31.4638, lng: -100.4370, hardness: 428, level: 'very_hard' },
  { city: 'Waco', state: 'TX', zip: '76701', lat: 31.5493, lng: -97.1467, hardness: 41, level: 'soft' },
  
  // Arizona cities
  { city: 'Bullhead City', state: 'AZ', zip: '86429', lat: 35.1478, lng: -114.5683, hardness: 615, level: 'very_hard' },
  { city: 'Chandler', state: 'AZ', zip: '85225', lat: 33.3062, lng: -111.8413, hardness: 292, level: 'very_hard' },
  { city: 'Gilbert', state: 'AZ', zip: '85233', lat: 33.3528, lng: -111.7890, hardness: 215, level: 'hard' },
  { city: 'Glendale', state: 'AZ', zip: '85301', lat: 33.5387, lng: -112.1860, hardness: 291, level: 'very_hard' },
  { city: 'Lake Havasu City', state: 'AZ', zip: '86403', lat: 34.4839, lng: -114.3224, hardness: 323, level: 'very_hard' },
  { city: 'Mesa', state: 'AZ', zip: '85204', lat: 33.4152, lng: -111.8315, hardness: 292, level: 'very_hard' },
  { city: 'Phoenix', state: 'AZ', zip: '85003', lat: 33.4484, lng: -112.0740, hardness: 225, level: 'very_hard' },
  { city: 'Scottsdale', state: 'AZ', zip: '85254', lat: 33.4942, lng: -111.9261, hardness: 343, level: 'very_hard' },
  { city: 'Tempe', state: 'AZ', zip: '85281', lat: 33.4255, lng: -111.9400, hardness: 210, level: 'hard' },
  { city: 'Tucson', state: 'AZ', zip: '85746', lat: 32.2226, lng: -110.9747, hardness: 211, level: 'hard' },
  { city: 'Yuma', state: 'AZ', zip: '85364', lat: 32.6927, lng: -114.6277, hardness: 370, level: 'very_hard' },
  
  // Florida cities
  { city: 'Boca Raton', state: 'FL', zip: '33428', lat: 26.3683, lng: -80.1289, hardness: 189, level: 'hard' },
  { city: 'Cape Coral', state: 'FL', zip: '33904', lat: 26.5629, lng: -81.9495, hardness: 85, level: 'moderate' },
  { city: 'Clearwater', state: 'FL', zip: '33755', lat: 27.9659, lng: -82.8001, hardness: 178, level: 'hard' },
  { city: 'Coral Springs', state: 'FL', zip: '33065', lat: 26.2709, lng: -80.2706, hardness: 298, level: 'very_hard' },
  { city: 'Fort Lauderdale', state: 'FL', zip: '33309', lat: 26.1224, lng: -80.1373, hardness: 157, level: 'hard' },
  { city: 'Gainesville', state: 'FL', zip: '32601', lat: 29.6516, lng: -82.3248, hardness: 140, level: 'hard' },
  { city: 'Hialeah', state: 'FL', zip: '33010', lat: 25.8576, lng: -80.2781, hardness: 290, level: 'very_hard' },
  { city: 'Jacksonville', state: 'FL', zip: '32202', lat: 30.3322, lng: -81.6557, hardness: 154, level: 'hard' },
  { city: 'Lakeland', state: 'FL', zip: '33801', lat: 28.0395, lng: -81.9498, hardness: 180, level: 'hard' },
  { city: 'Miami', state: 'FL', zip: '33101', lat: 25.7617, lng: -80.1918, hardness: 219, level: 'hard' },
  { city: 'Orlando', state: 'FL', zip: '32801', lat: 28.5383, lng: -81.3792, hardness: 129, level: 'hard' },
  { city: 'St. Petersburg', state: 'FL', zip: '33701', lat: 27.7676, lng: -82.6403, hardness: 161, level: 'hard' },
  { city: 'Tampa', state: 'FL', zip: '33602', lat: 27.9506, lng: -82.4572, hardness: 220, level: 'very_hard' },
  { city: 'Tallahassee', state: 'FL', zip: '32301', lat: 30.4383, lng: -84.2807, hardness: 126, level: 'hard' },
  { city: 'West Palm Beach', state: 'FL', zip: '33401', lat: 26.7153, lng: -80.0534, hardness: 317, level: 'very_hard' },
  
  // Washington cities
  { city: 'Seattle', state: 'WA', zip: '98101', lat: 47.6062, lng: -122.3321, hardness: 22, level: 'soft' },
  { city: 'Spokane', state: 'WA', zip: '99201', lat: 47.6588, lng: -117.4260, hardness: 218, level: 'very_hard' },
  { city: 'Tacoma', state: 'WA', zip: '98402', lat: 47.2529, lng: -122.4443, hardness: 15, level: 'soft' },
  { city: 'Vancouver', state: 'WA', zip: '98660', lat: 45.6387, lng: -122.6615, hardness: 96, level: 'moderate' },
  { city: 'Bellevue', state: 'WA', zip: '98004', lat: 47.6101, lng: -122.2015, hardness: 25, level: 'soft' },
  { city: 'Everett', state: 'WA', zip: '98201', lat: 47.9790, lng: -122.2021, hardness: 12, level: 'soft' },
  { city: 'Redmond', state: 'WA', zip: '98052', lat: 47.6740, lng: -122.1215, hardness: 18, level: 'soft' },
  { city: 'Olympia', state: 'WA', zip: '98501', lat: 47.0379, lng: -122.9007, hardness: 83, level: 'moderate' },
  { city: 'Bellingham', state: 'WA', zip: '98225', lat: 48.7519, lng: -122.4787, hardness: 24, level: 'soft' },
  { city: 'Yakima', state: 'WA', zip: '98901', lat: 46.6021, lng: -120.5059, hardness: 87, level: 'moderate' },
  
  // New York cities
  { city: 'New York City', state: 'NY', zip: '10001', lat: 40.7128, lng: -74.0060, hardness: 65, level: 'moderate' },
  { city: 'Buffalo', state: 'NY', zip: '14201', lat: 42.8864, lng: -78.8784, hardness: 135, level: 'hard' },
  { city: 'Rochester', state: 'NY', zip: '14604', lat: 43.1566, lng: -77.6088, hardness: 118, level: 'hard' },
  { city: 'Albany', state: 'NY', zip: '12202', lat: 42.6526, lng: -73.7562, hardness: 54, level: 'soft' },
  { city: 'Syracuse', state: 'NY', zip: '13202', lat: 43.0481, lng: -76.1474, hardness: 120, level: 'hard' },
  { city: 'Yonkers', state: 'NY', zip: '10701', lat: 40.9312, lng: -73.8987, hardness: 100, level: 'moderate' },
  
  // Pennsylvania cities
  { city: 'Philadelphia', state: 'PA', zip: '19120', lat: 39.9526, lng: -75.1652, hardness: 149, level: 'hard' },
  { city: 'Pittsburgh', state: 'PA', zip: '15237', lat: 40.4406, lng: -79.9959, hardness: 136, level: 'hard' },
  { city: 'Allentown', state: 'PA', zip: '18102', lat: 40.6023, lng: -75.4714, hardness: 176, level: 'hard' },
  { city: 'Erie', state: 'PA', zip: '16509', lat: 42.1292, lng: -80.0851, hardness: 160, level: 'hard' },
  { city: 'Reading', state: 'PA', zip: '19606', lat: 40.3356, lng: -75.9269, hardness: 265, level: 'very_hard' },
  { city: 'Scranton', state: 'PA', zip: '18505', lat: 41.4090, lng: -75.6624, hardness: 280, level: 'very_hard' },
  { city: 'Harrisburg', state: 'PA', zip: '17112', lat: 40.2732, lng: -76.8867, hardness: 160, level: 'hard' },
  
  // Michigan cities
  { city: 'Detroit', state: 'MI', zip: '48201', lat: 42.3314, lng: -83.0458, hardness: 104, level: 'moderate' },
  { city: 'Grand Rapids', state: 'MI', zip: '49503', lat: 42.9634, lng: -85.6681, hardness: 380, level: 'very_hard' },
  { city: 'Ann Arbor', state: 'MI', zip: '48103', lat: 42.2808, lng: -83.7430, hardness: 129, level: 'hard' },
  { city: 'Flint', state: 'MI', zip: '48502', lat: 43.0125, lng: -83.6875, hardness: 242, level: 'very_hard' },
  { city: 'Lansing', state: 'MI', zip: '48906', lat: 42.7325, lng: -84.5555, hardness: 99, level: 'moderate' },
  { city: 'Kalamazoo', state: 'MI', zip: '49001', lat: 42.2917, lng: -85.5872, hardness: 115, level: 'hard' },
  
  // Ohio cities (additional)
  { city: 'Akron', state: 'OH', zip: '44301', lat: 41.0814, lng: -81.5190, hardness: 112, level: 'hard' },
  { city: 'Cedarville', state: 'OH', zip: '45314', lat: 39.7445, lng: -83.8088, hardness: 400, level: 'very_hard' },
  { city: 'Chillicothe', state: 'OH', zip: '45601', lat: 39.3331, lng: -82.9824, hardness: 140, level: 'hard' },
  { city: 'Cincinnati', state: 'OH', zip: '45202', lat: 39.1031, lng: -84.5120, hardness: 130, level: 'hard' },
  { city: 'Cleveland', state: 'OH', zip: '44101', lat: 41.4993, lng: -81.6944, hardness: 125, level: 'hard' },
  { city: 'Clifton', state: 'OH', zip: '45136', lat: 39.1812, lng: -84.1385, hardness: 400, level: 'very_hard' },
  { city: 'Dayton', state: 'OH', zip: '45402', lat: 39.7589, lng: -84.1916, hardness: 155, level: 'hard' },
  { city: 'Delaware', state: 'OH', zip: '43105', lat: 40.2987, lng: -83.0679, hardness: 140, level: 'hard' },
  { city: 'Elyria', state: 'OH', zip: '44035', lat: 41.3683, lng: -82.1076, hardness: 120, level: 'hard' },
  { city: 'Grove City', state: 'OH', zip: '43123', lat: 39.8814, lng: -83.0930, hardness: 120, level: 'hard' },
  { city: 'Hamilton', state: 'OH', zip: '45011', lat: 39.3995, lng: -84.5613, hardness: 131, level: 'hard' },
  { city: 'Hilliard', state: 'OH', zip: '43026', lat: 40.0334, lng: -83.1585, hardness: 121, level: 'hard' },
  { city: 'Lancaster', state: 'OH', zip: '43130', lat: 39.7137, lng: -82.5993, hardness: 128, level: 'hard' },
  { city: 'Loveland', state: 'OH', zip: '45140', lat: 39.2689, lng: -84.2638, hardness: 342, level: 'very_hard' },
  { city: 'Mason', state: 'OH', zip: '45040', lat: 39.3600, lng: -84.3097, hardness: 171, level: 'hard' },
  { city: 'Mentor', state: 'OH', zip: '44060', lat: 41.6662, lng: -81.3398, hardness: 122, level: 'hard' },
  { city: 'Middletown', state: 'OH', zip: '45044', lat: 39.5150, lng: -84.3983, hardness: 131, level: 'hard' },
  { city: 'Newark', state: 'OH', zip: '43055', lat: 40.0581, lng: -82.4013, hardness: 109, level: 'moderate' },
  { city: 'Painesville', state: 'OH', zip: '44077', lat: 41.7245, lng: -81.2457, hardness: 122, level: 'hard' },
  { city: 'Reynoldsburg', state: 'OH', zip: '43068', lat: 39.9548, lng: -82.8121, hardness: 120, level: 'hard' },
  { city: 'Toledo', state: 'OH', zip: '43604', lat: 41.6528, lng: -83.5379, hardness: 74, level: 'moderate' },
  { city: 'Westerville', state: 'OH', zip: '43081', lat: 40.1262, lng: -82.9291, hardness: 122, level: 'hard' },
  { city: 'Xenia', state: 'OH', zip: '45385', lat: 39.6848, lng: -83.9297, hardness: 400, level: 'very_hard' },

  // Illinois cities (additional)
  { city: 'Aurora', state: 'IL', zip: '60502', lat: 41.7606, lng: -88.3201, hardness: 127, level: 'hard' },
  { city: 'Carol Stream', state: 'IL', zip: '60188', lat: 41.9125, lng: -88.1348, hardness: 418, level: 'very_hard' },
  { city: 'Champaign', state: 'IL', zip: '61820', lat: 40.1164, lng: -88.2434, hardness: 258, level: 'very_hard' },
  { city: 'Cicero', state: 'IL', zip: '60804', lat: 41.8456, lng: -87.7539, hardness: 187, level: 'hard' },
  { city: 'Crystal Lake', state: 'IL', zip: '60012', lat: 42.2411, lng: -88.3162, hardness: 137, level: 'hard' },
  { city: 'Danville', state: 'IL', zip: '61832', lat: 40.1247, lng: -87.6300, hardness: 191, level: 'hard' },
  { city: 'Decatur', state: 'IL', zip: '62521', lat: 39.8403, lng: -88.9548, hardness: 194, level: 'hard' },
  { city: 'Dekalb', state: 'IL', zip: '60115', lat: 41.9295, lng: -88.7503, hardness: 188, level: 'hard' },
  { city: 'Des Plaines', state: 'IL', zip: '60016', lat: 42.0334, lng: -87.8834, hardness: 350, level: 'very_hard' },
  { city: 'Downers Grove', state: 'IL', zip: '60515', lat: 41.8089, lng: -88.0112, hardness: 288, level: 'very_hard' },
  { city: 'East Peoria', state: 'IL', zip: '61611', lat: 40.6664, lng: -89.5801, hardness: 250, level: 'very_hard' },
  { city: 'East Saint Louis', state: 'IL', zip: '62201', lat: 38.6247, lng: -90.1509, hardness: 210, level: 'hard' },
  { city: 'Elgin', state: 'IL', zip: '60120', lat: 42.0354, lng: -88.2826, hardness: 171, level: 'hard' },
  { city: 'Elmhurst', state: 'IL', zip: '60126', lat: 41.8994, lng: -87.9403, hardness: 362, level: 'very_hard' },
  { city: 'Elmwood Park', state: 'IL', zip: '60707', lat: 41.9214, lng: -87.8095, hardness: 218, level: 'very_hard' },
  { city: 'Evanston', state: 'IL', zip: '60201', lat: 42.0451, lng: -87.6877, hardness: 333, level: 'very_hard' },
  { city: 'Glenview', state: 'IL', zip: '60025', lat: 42.0697, lng: -87.7878, hardness: 299, level: 'very_hard' },
  { city: 'Granite City', state: 'IL', zip: '62040', lat: 38.7014, lng: -90.1487, hardness: 250, level: 'very_hard' },
  { city: 'Joilet', state: 'IL', zip: '60431', lat: 41.5250, lng: -88.0817, hardness: 388, level: 'very_hard' },
  { city: 'Kankakee', state: 'IL', zip: '60901', lat: 41.1200, lng: -87.8612, hardness: 196, level: 'hard' },
  { city: 'Lombard', state: 'IL', zip: '60148', lat: 41.8800, lng: -88.0078, hardness: 344, level: 'very_hard' },
  { city: 'Melrose Park', state: 'IL', zip: '60160', lat: 41.9006, lng: -87.8567, hardness: 222, level: 'very_hard' },
  { city: 'Moline', state: 'IL', zip: '61265', lat: 41.5067, lng: -90.5151, hardness: 210, level: 'hard' },
  { city: 'Mount Prospect', state: 'IL', zip: '60056', lat: 42.0664, lng: -87.9373, hardness: 247, level: 'very_hard' },
  { city: 'Naperville', state: 'IL', zip: '60540', lat: 41.7508, lng: -88.1535, hardness: 288, level: 'very_hard' },
  { city: 'Oak Lawn', state: 'IL', zip: '60453', lat: 41.7189, lng: -87.7479, hardness: 222, level: 'very_hard' },
  { city: 'Oak Park', state: 'IL', zip: '60301', lat: 41.8850, lng: -87.7845, hardness: 212, level: 'hard' },
  { city: 'Orland Park', state: 'IL', zip: '60462', lat: 41.6303, lng: -87.8539, hardness: 322, level: 'very_hard' },
  { city: 'Palatine', state: 'IL', zip: '60067', lat: 42.1103, lng: -88.0342, hardness: 245, level: 'very_hard' },
  { city: 'Peoria', state: 'IL', zip: '61602', lat: 40.6936, lng: -89.5890, hardness: 250, level: 'very_hard' },
  { city: 'Plainfield', state: 'IL', zip: '60544', lat: 41.6320, lng: -88.2120, hardness: 280, level: 'very_hard' },
  { city: 'Rockford', state: 'IL', zip: '61101', lat: 42.2711, lng: -89.0940, hardness: 308, level: 'very_hard' },
  { city: 'Romeoville', state: 'IL', zip: '60446', lat: 41.6475, lng: -88.0895, hardness: 395, level: 'very_hard' },
  { city: 'Springfield', state: 'IL', zip: '62701', lat: 39.7817, lng: -89.6501, hardness: 88, level: 'moderate' },

  // Indiana cities (additional)
  { city: 'Batesville', state: 'IN', zip: '47005', lat: 39.3000, lng: -85.2219, hardness: 322, level: 'very_hard' },
  { city: 'Bloomington', state: 'IN', zip: '47401', lat: 39.1653, lng: -86.5264, hardness: 339, level: 'very_hard' },
  { city: 'Carmel', state: 'IN', zip: '46032', lat: 39.9784, lng: -86.1180, hardness: 137, level: 'hard' },
  { city: 'Chesterton', state: 'IN', zip: '46304', lat: 41.6106, lng: -87.0642, hardness: 311, level: 'very_hard' },
  { city: 'Clay City', state: 'IN', zip: '47841', lat: 39.2745, lng: -87.1128, hardness: 307, level: 'very_hard' },
  { city: 'Elkhart', state: 'IN', zip: '46514', lat: 41.6820, lng: -85.9767, hardness: 342, level: 'very_hard' },
  { city: 'Evansville', state: 'IN', zip: '47708', lat: 37.9747, lng: -87.5558, hardness: 124, level: 'hard' },
  { city: 'Fairland', state: 'IN', zip: '46126', lat: 39.5959, lng: -85.8655, hardness: 305, level: 'very_hard' },
  { city: 'Fishers', state: 'IN', zip: '46038', lat: 39.9568, lng: -86.0139, hardness: 305, level: 'very_hard' },
  { city: 'Ferdinand', state: 'IN', zip: '47532', lat: 38.2242, lng: -86.8619, hardness: 350, level: 'very_hard' },
  { city: 'Fort Wayne', state: 'IN', zip: '46802', lat: 41.0793, lng: -85.1394, hardness: 129, level: 'hard' },
  { city: 'Gary', state: 'IN', zip: '46402', lat: 41.5934, lng: -87.3464, hardness: 144, level: 'hard' },
  { city: 'Georgetown', state: 'IN', zip: '47122', lat: 38.2956, lng: -85.9622, hardness: 326, level: 'very_hard' },
  { city: 'Greenwood', state: 'IN', zip: '46141', lat: 39.6137, lng: -86.1067, hardness: 342, level: 'very_hard' },
  { city: 'Kokomo', state: 'IN', zip: '46901', lat: 40.4864, lng: -86.1336, hardness: 440, level: 'very_hard' },
  { city: 'Lafayette', state: 'IN', zip: '47901', lat: 40.4167, lng: -86.8753, hardness: 331, level: 'very_hard' },
  { city: 'Mecca', state: 'IN', zip: '47860', lat: 39.7231, lng: -87.3294, hardness: 403, level: 'very_hard' },
  { city: 'Mishawaka', state: 'IN', zip: '46544', lat: 41.6620, lng: -86.1586, hardness: 325, level: 'very_hard' },
  { city: 'Muncie', state: 'IN', zip: '47302', lat: 40.1934, lng: -85.3863, hardness: 345, level: 'very_hard' },
  { city: 'Nobelsville', state: 'IN', zip: '46060', lat: 40.0456, lng: -86.0086, hardness: 400, level: 'very_hard' },
  { city: 'Peru', state: 'IN', zip: '46970', lat: 40.7536, lng: -86.0686, hardness: 349, level: 'very_hard' },
  { city: 'Plymouth', state: 'IN', zip: '46563', lat: 41.3436, lng: -86.3097, hardness: 342, level: 'very_hard' },
  { city: 'Somerset', state: 'IN', zip: '46984', lat: 40.5934, lng: -85.8544, hardness: 560, level: 'very_hard' },
  { city: 'South Bend', state: 'IN', zip: '46601', lat: 41.6764, lng: -86.2520, hardness: 370, level: 'very_hard' },
  { city: 'Terra Haute', state: 'IN', zip: '47802', lat: 39.4667, lng: -87.4139, hardness: 367, level: 'very_hard' },
  { city: 'Wabash', state: 'IN', zip: '46992', lat: 40.7978, lng: -85.8203, hardness: 560, level: 'very_hard' },
  { city: 'Warren', state: 'IN', zip: '46792', lat: 40.6845, lng: -85.4269, hardness: 275, level: 'very_hard' },
  { city: 'Washington', state: 'IN', zip: '47501', lat: 38.6592, lng: -87.1728, hardness: 275, level: 'very_hard' },
  { city: 'Whiteland', state: 'IN', zip: '46184', lat: 39.5445, lng: -86.0797, hardness: 275, level: 'very_hard' },

  // Georgia cities (additional)
  { city: 'Albany', state: 'GA', zip: '31701', lat: 31.5785, lng: -84.1557, hardness: 34, level: 'soft' },
  { city: 'Athens', state: 'GA', zip: '30601', lat: 33.9519, lng: -83.3576, hardness: 120, level: 'hard' },
  { city: 'Augusta', state: 'GA', zip: '30901', lat: 33.4735, lng: -82.0105, hardness: 58, level: 'soft' },
  { city: 'Brunswick', state: 'GA', zip: '31520', lat: 31.1500, lng: -81.4915, hardness: 58, level: 'soft' },
  { city: 'Dalton', state: 'GA', zip: '30720', lat: 34.7698, lng: -84.9702, hardness: 76, level: 'moderate' },
  { city: 'Gainsville', state: 'GA', zip: '30501', lat: 34.2979, lng: -83.8241, hardness: 77, level: 'moderate' },
  { city: 'Macon', state: 'GA', zip: '31201', lat: 32.8407, lng: -83.6324, hardness: 58, level: 'soft' },
  { city: 'Rome', state: 'GA', zip: '30160', lat: 34.2570, lng: -85.1647, hardness: 54, level: 'soft' },
  { city: 'Savannah', state: 'GA', zip: '31401', lat: 32.0809, lng: -81.0912, hardness: 57, level: 'soft' },
  { city: 'Valdosta', state: 'GA', zip: '31601', lat: 30.8327, lng: -83.2785, hardness: 42, level: 'soft' },

  // North Carolina cities (additional)
  { city: 'Raleigh', state: 'NC', zip: '27601', lat: 35.7796, lng: -78.6382, hardness: 40, level: 'soft' },
  { city: 'Greensboro', state: 'NC', zip: '27401', lat: 36.0726, lng: -79.7920, hardness: 44, level: 'soft' },
  { city: 'Rocky Mount', state: 'NC', zip: '27801', lat: 35.9382, lng: -77.7905, hardness: 77, level: 'moderate' },
  { city: 'Winston', state: 'NC', zip: '27101', lat: 36.0999, lng: -80.2442, hardness: 42, level: 'soft' },
  { city: 'Durham', state: 'NC', zip: '27701', lat: 35.9940, lng: -78.8986, hardness: 47, level: 'soft' },
  { city: 'Ashville', state: 'NC', zip: '28801', lat: 35.5951, lng: -82.5515, hardness: 44, level: 'soft' },
  { city: 'Fayetteville', state: 'NC', zip: '28301', lat: 35.0527, lng: -78.8784, hardness: 48, level: 'soft' },
  { city: 'Hickory', state: 'NC', zip: '28601', lat: 35.7332, lng: -81.3412, hardness: 215, level: 'very_hard' },
  { city: 'Wilmington', state: 'NC', zip: '28401', lat: 34.2257, lng: -77.9447, hardness: 70, level: 'moderate' },
  { city: 'Greenville', state: 'NC', zip: '27834', lat: 35.6127, lng: -77.3664, hardness: 85, level: 'moderate' },
  { city: 'Burlington', state: 'NC', zip: '27215', lat: 36.0957, lng: -79.4378, hardness: 52, level: 'soft' },
  { city: 'New Bern', state: 'NC', zip: '28560', lat: 35.1085, lng: -77.0441, hardness: 100, level: 'moderate' },

  // Washington state cities (additional)
  { city: 'Kent', state: 'WA', zip: '98032', lat: 47.3809, lng: -122.2348, hardness: 47, level: 'soft' },
  { city: 'Renton', state: 'WA', zip: '98055', lat: 47.4829, lng: -122.2171, hardness: 33, level: 'soft' },
  { city: 'Federal Way', state: 'WA', zip: '98003', lat: 47.3223, lng: -122.3126, hardness: 24, level: 'soft' },
  { city: 'Tri-Cities', state: 'WA', zip: '99301', lat: 46.2396, lng: -119.1006, hardness: 174, level: 'hard' },
  { city: 'Mount Vernon', state: 'WA', zip: '98273', lat: 48.4212, lng: -122.3340, hardness: 23, level: 'soft' },
  { city: 'Longview', state: 'WA', zip: '98632', lat: 46.1382, lng: -122.9382, hardness: 91, level: 'moderate' },
  { city: 'Whidbey Island', state: 'WA', zip: '98277', lat: 48.2237, lng: -122.6868, hardness: 25, level: 'soft' },
  { city: 'Port Angeles', state: 'WA', zip: '98362', lat: 48.1181, lng: -123.4307, hardness: 88, level: 'moderate' },
  { city: 'Sequim', state: 'WA', zip: '98382', lat: 48.0795, lng: -123.1018, hardness: 108, level: 'moderate' },
  { city: 'Walla Walla', state: 'WA', zip: '99362', lat: 46.0646, lng: -118.3430, hardness: 180, level: 'hard' },
  { city: 'Moses Lake', state: 'WA', zip: '98837', lat: 47.1301, lng: -119.2781, hardness: 73, level: 'moderate' },
  { city: 'Ellensburg', state: 'WA', zip: '98926', lat: 46.9965, lng: -120.5478, hardness: 33, level: 'soft' },
  { city: 'Wenatchee', state: 'WA', zip: '98801', lat: 47.4235, lng: -120.3103, hardness: 147, level: 'hard' },

  // New York cities (additional)
  { city: 'Utica', state: 'NY', zip: '13501', lat: 43.1009, lng: -75.2327, hardness: 16, level: 'soft' },
  { city: 'Irondequoit', state: 'NY', zip: '14617', lat: 43.2134, lng: -77.5719, hardness: 25, level: 'soft' },
  { city: 'Binghamton', state: 'NY', zip: '13901', lat: 42.0987, lng: -75.9179, hardness: 65, level: 'moderate' },
  { city: 'Ramapo', state: 'NY', zip: '10977', lat: 41.1373, lng: -74.0854, hardness: 149, level: 'hard' },
  { city: 'Grand Island', state: 'NY', zip: '14072', lat: 43.0323, lng: -78.9500, hardness: 137, level: 'hard' },
  { city: 'Schenectady', state: 'NY', zip: '12305', lat: 42.8142, lng: -73.9396, hardness: 56, level: 'soft' },
  { city: 'Brookhaven', state: 'NY', zip: '11719', lat: 40.7818, lng: -72.9151, hardness: 33, level: 'soft' },
  { city: 'Lake Placid', state: 'NY', zip: '12946', lat: 44.2795, lng: -73.9799, hardness: 22, level: 'soft' },
  { city: 'East Meadows', state: 'NY', zip: '11554', lat: 40.7137, lng: -73.5593, hardness: 50, level: 'soft' },
  { city: 'Massapequa', state: 'NY', zip: '11758', lat: 40.6807, lng: -73.4743, hardness: 13, level: 'soft' },
  { city: 'Lake Success', state: 'NY', zip: '11020', lat: 40.7726, lng: -73.7107, hardness: 50, level: 'soft' },
  { city: 'Islip', state: 'NY', zip: '11751', lat: 40.7301, lng: -73.2090, hardness: 32, level: 'soft' },
  { city: 'Babylon', state: 'NY', zip: '11702', lat: 40.6954, lng: -73.3257, hardness: 21, level: 'soft' },
  { city: 'Smithtown', state: 'NY', zip: '11787', lat: 40.8557, lng: -73.2007, hardness: 23, level: 'soft' },
  { city: 'Oyster Bay', state: 'NY', zip: '11771', lat: 40.8659, lng: -73.5318, hardness: 18, level: 'soft' },

  // Pennsylvania cities (additional)
  { city: 'Altoona', state: 'PA', zip: '16601', lat: 40.5187, lng: -78.3947, hardness: 121, level: 'hard' },
  { city: 'Chambersburg', state: 'PA', zip: '17201', lat: 39.9376, lng: -77.6611, hardness: 10, level: 'soft' },
  { city: 'East Stroudsburg', state: 'PA', zip: '18301', lat: 41.0037, lng: -75.1813, hardness: 112, level: 'hard' },
  { city: 'Gettysburg', state: 'PA', zip: '17325', lat: 39.8309, lng: -77.2311, hardness: 118, level: 'hard' },
  { city: 'Hazleton', state: 'PA', zip: '18201', lat: 40.9584, lng: -75.9746, hardness: 23, level: 'soft' },
  { city: 'Hershey', state: 'PA', zip: '17033', lat: 40.2859, lng: -76.6505, hardness: 150, level: 'hard' },
  { city: 'Johnstown', state: 'PA', zip: '15901', lat: 40.3267, lng: -78.9220, hardness: 122, level: 'hard' },
  { city: 'Lancaster', state: 'PA', zip: '17601', lat: 40.0379, lng: -76.3055, hardness: 105, level: 'moderate' },
  { city: 'Lebanon', state: 'PA', zip: '17042', lat: 40.3409, lng: -76.4113, hardness: 176, level: 'hard' },
  { city: 'Punxsutawney', state: 'PA', zip: '15767', lat: 40.9434, lng: -78.9708, hardness: 310, level: 'very_hard' },
  { city: 'State College', state: 'PA', zip: '16801', lat: 40.7934, lng: -77.8600, hardness: 170, level: 'hard' },
  { city: 'Warren', state: 'PA', zip: '16365', lat: 41.8434, lng: -79.1450, hardness: 96, level: 'moderate' },
  { city: 'Williamsport', state: 'PA', zip: '17701', lat: 41.2412, lng: -77.0011, hardness: 145, level: 'hard' },
  { city: 'York-Hanover', state: 'PA', zip: '17401', lat: 39.9626, lng: -76.7277, hardness: 182, level: 'hard' },

  // Other major cities
  { city: 'Denver', state: 'CO', zip: '80202', lat: 39.7392, lng: -104.9903, hardness: 145, level: 'hard' },
  { city: 'Chicago', state: 'IL', zip: '60601', lat: 41.8781, lng: -87.6298, hardness: 148, level: 'hard' },
  { city: 'Las Vegas', state: 'NV', zip: '89101', lat: 36.1699, lng: -115.1398, hardness: 278, level: 'very_hard' },
  { city: 'Indianapolis', state: 'IN', zip: '46201', lat: 39.7684, lng: -86.1581, hardness: 274, level: 'very_hard' },
  { city: 'Minneapolis', state: 'MN', zip: '55401', lat: 44.9778, lng: -93.2650, hardness: 180, level: 'hard' },
  { city: 'Portland', state: 'OR', zip: '97201', lat: 45.5152, lng: -122.6784, hardness: 33, level: 'soft' },
  { city: 'Atlanta', state: 'GA', zip: '30303', lat: 33.7490, lng: -84.3880, hardness: 21, level: 'soft' },
  { city: 'Boston', state: 'MA', zip: '02101', lat: 42.3601, lng: -71.0589, hardness: 52, level: 'soft' },
  { city: 'Baltimore', state: 'MD', zip: '21201', lat: 39.2904, lng: -76.6122, hardness: 105, level: 'moderate' },
  { city: 'Columbus', state: 'OH', zip: '43215', lat: 39.9612, lng: -82.9988, hardness: 128, level: 'hard' },
  { city: 'Milwaukee', state: 'WI', zip: '53202', lat: 43.0389, lng: -87.9065, hardness: 125, level: 'hard' },
  { city: 'Nashville', state: 'TN', zip: '37201', lat: 36.1627, lng: -86.7816, hardness: 92, level: 'moderate' },
  { city: 'Louisville', state: 'KY', zip: '40202', lat: 38.2527, lng: -85.7585, hardness: 175, level: 'hard' },
  { city: 'Charlotte', state: 'NC', zip: '28202', lat: 35.2271, lng: -80.8431, hardness: 28, level: 'soft' },
  { city: 'Albuquerque', state: 'NM', zip: '87102', lat: 35.0844, lng: -106.6504, hardness: 248, level: 'very_hard' },
  { city: 'Salt Lake City', state: 'UT', zip: '84101', lat: 40.7608, lng: -111.8910, hardness: 285, level: 'very_hard' },
  { city: 'Jacksonville', state: 'NC', zip: '28540', lat: 34.7540, lng: -77.4302, hardness: 111, level: 'hard' },

  // Additional states
  // Nevada
  { city: 'Henderson', state: 'NV', zip: '89002', lat: 36.0397, lng: -114.9819, hardness: 285, level: 'very_hard' },
  { city: 'Reno', state: 'NV', zip: '89501', lat: 40.5200, lng: -119.8138, hardness: 65, level: 'moderate' },
  { city: 'North Las Vegas', state: 'NV', zip: '89030', lat: 36.1989, lng: -115.1175, hardness: 283, level: 'very_hard' },
  { city: 'Sparks', state: 'NV', zip: '89431', lat: 39.5349, lng: -119.7527, hardness: 62, level: 'moderate' },
  { city: 'Carson City', state: 'NV', zip: '89701', lat: 39.1638, lng: -119.7674, hardness: 180, level: 'hard' },

  // Oregon
  { city: 'Eugene', state: 'OR', zip: '97401', lat: 44.0521, lng: -123.0868, hardness: 48, level: 'soft' },
  { city: 'Salem', state: 'OR', zip: '97301', lat: 44.9429, lng: -123.0351, hardness: 62, level: 'moderate' },
  { city: 'Bend', state: 'OR', zip: '97701', lat: 44.0582, lng: -121.3153, hardness: 44, level: 'soft' },
  { city: 'Medford', state: 'OR', zip: '97501', lat: 42.3265, lng: -122.8756, hardness: 95, level: 'moderate' },
  { city: 'Corvallis', state: 'OR', zip: '97330', lat: 44.5646, lng: -123.2620, hardness: 53, level: 'soft' },

  // Colorado (additional)
  { city: 'Colorado Springs', state: 'CO', zip: '80903', lat: 38.8339, lng: -104.8214, hardness: 218, level: 'very_hard' },
  { city: 'Aurora', state: 'CO', zip: '80010', lat: 39.7294, lng: -104.8319, hardness: 148, level: 'hard' },
  { city: 'Fort Collins', state: 'CO', zip: '80521', lat: 40.5853, lng: -105.0844, hardness: 182, level: 'hard' },
  { city: 'Boulder', state: 'CO', zip: '80301', lat: 40.0150, lng: -105.2705, hardness: 175, level: 'hard' },
  { city: 'Pueblo', state: 'CO', zip: '81003', lat: 38.2544, lng: -104.6091, hardness: 210, level: 'hard' },

  // Wisconsin (additional)
  { city: 'Madison', state: 'WI', zip: '53703', lat: 43.0731, lng: -89.4012, hardness: 145, level: 'hard' },
  { city: 'Green Bay', state: 'WI', zip: '54301', lat: 44.5133, lng: -88.0133, hardness: 198, level: 'hard' },
  { city: 'Kenosha', state: 'WI', zip: '53140', lat: 42.5847, lng: -87.8212, hardness: 135, level: 'hard' },
  { city: 'Racine', state: 'WI', zip: '53403', lat: 42.7261, lng: -87.7829, hardness: 142, level: 'hard' },
  { city: 'Appleton', state: 'WI', zip: '54911', lat: 44.2619, lng: -88.4154, hardness: 168, level: 'hard' },

  // Tennessee (additional)
  { city: 'Memphis', state: 'TN', zip: '38103', lat: 35.1495, lng: -90.0490, hardness: 65, level: 'moderate' },
  { city: 'Knoxville', state: 'TN', zip: '37902', lat: 35.9606, lng: -83.9207, hardness: 75, level: 'moderate' },
  { city: 'Chattanooga', state: 'TN', zip: '37402', lat: 35.0456, lng: -85.3097, hardness: 88, level: 'moderate' },
  { city: 'Clarksville', state: 'TN', zip: '37040', lat: 36.5298, lng: -87.3595, hardness: 95, level: 'moderate' },

  // Missouri (additional)
  { city: 'Kansas City', state: 'MO', zip: '64101', lat: 39.0997, lng: -94.5786, hardness: 215, level: 'very_hard' },
  { city: 'St. Louis', state: 'MO', zip: '63101', lat: 38.6270, lng: -90.1994, hardness: 240, level: 'very_hard' },
  { city: 'Springfield', state: 'MO', zip: '65801', lat: 37.2090, lng: -93.2923, hardness: 195, level: 'hard' },
  { city: 'Columbia', state: 'MO', zip: '65201', lat: 38.9517, lng: -92.3341, hardness: 205, level: 'hard' },
  { city: 'Independence', state: 'MO', zip: '64050', lat: 39.0911, lng: -94.4155, hardness: 218, level: 'very_hard' },

  // Maryland (additional)
  { city: 'Annapolis', state: 'MD', zip: '21401', lat: 38.9784, lng: -76.4922, hardness: 118, level: 'moderate' },
  { city: 'Frederick', state: 'MD', zip: '21701', lat: 39.4143, lng: -77.4105, hardness: 135, level: 'hard' },
  { city: 'Rockville', state: 'MD', zip: '20850', lat: 39.0840, lng: -77.1528, hardness: 98, level: 'moderate' },
  { city: 'Columbia', state: 'MD', zip: '21044', lat: 39.2404, lng: -76.8544, hardness: 112, level: 'moderate' },

  // Minnesota (additional)
  { city: 'St. Paul', state: 'MN', zip: '55101', lat: 44.9537, lng: -93.0900, hardness: 185, level: 'hard' },
  { city: 'Rochester', state: 'MN', zip: '55901', lat: 44.0121, lng: -92.4802, hardness: 205, level: 'hard' },
  { city: 'Duluth', state: 'MN', zip: '55802', lat: 46.7867, lng: -92.1005, hardness: 75, level: 'moderate' },
  { city: 'Bloomington', state: 'MN', zip: '55420', lat: 44.8408, lng: -93.2983, hardness: 188, level: 'hard' },

  // Louisiana
  { city: 'New Orleans', state: 'LA', zip: '70112', lat: 29.9511, lng: -90.0715, hardness: 48, level: 'soft' },
  { city: 'Baton Rouge', state: 'LA', zip: '70801', lat: 30.4515, lng: -91.1871, hardness: 72, level: 'moderate' },
  { city: 'Shreveport', state: 'LA', zip: '71101', lat: 32.5252, lng: -93.7502, hardness: 85, level: 'moderate' },
  { city: 'Lafayette', state: 'LA', zip: '70501', lat: 30.2241, lng: -92.0198, hardness: 68, level: 'moderate' },

  // Alabama
  { city: 'Birmingham', state: 'AL', zip: '35203', lat: 33.5207, lng: -86.8025, hardness: 82, level: 'moderate' },
  { city: 'Montgomery', state: 'AL', zip: '36104', lat: 32.3668, lng: -86.3000, hardness: 68, level: 'moderate' },
  { city: 'Mobile', state: 'AL', zip: '36602', lat: 30.6954, lng: -88.0399, hardness: 72, level: 'moderate' },
  { city: 'Huntsville', state: 'AL', zip: '35801', lat: 34.7304, lng: -86.5861, hardness: 88, level: 'moderate' },

  // Kentucky (additional)
  { city: 'Lexington', state: 'KY', zip: '40507', lat: 38.0406, lng: -84.5037, hardness: 198, level: 'hard' },
  { city: 'Bowling Green', state: 'KY', zip: '42101', lat: 36.9685, lng: -86.4808, hardness: 165, level: 'hard' },
  { city: 'Owensboro', state: 'KY', zip: '42301', lat: 37.7719, lng: -87.1112, hardness: 185, level: 'hard' },

  // South Carolina
  { city: 'Charleston', state: 'SC', zip: '29401', lat: 32.7765, lng: -79.9311, hardness: 48, level: 'soft' },
  { city: 'Columbia', state: 'SC', zip: '29201', lat: 34.0007, lng: -81.0348, hardness: 55, level: 'soft' },
  { city: 'Greenville', state: 'SC', zip: '29601', lat: 34.8526, lng: -82.3940, hardness: 58, level: 'soft' },
  { city: 'Myrtle Beach', state: 'SC', zip: '29577', lat: 33.6891, lng: -78.8867, hardness: 45, level: 'soft' },

  // Oklahoma
  { city: 'Oklahoma City', state: 'OK', zip: '73102', lat: 35.4676, lng: -97.5164, hardness: 225, level: 'very_hard' },
  { city: 'Tulsa', state: 'OK', zip: '74103', lat: 36.1540, lng: -95.9928, hardness: 198, level: 'hard' },
  { city: 'Norman', state: 'OK', zip: '73019', lat: 35.2226, lng: -97.4395, hardness: 235, level: 'very_hard' },
  { city: 'Broken Arrow', state: 'OK', zip: '74012', lat: 36.0526, lng: -95.7908, hardness: 205, level: 'hard' },

  // Connecticut
  { city: 'Hartford', state: 'CT', zip: '06103', lat: 41.7658, lng: -72.6734, hardness: 102, level: 'moderate' },
  { city: 'New Haven', state: 'CT', zip: '06510', lat: 41.3083, lng: -72.9279, hardness: 88, level: 'moderate' },
  { city: 'Stamford', state: 'CT', zip: '06901', lat: 41.0534, lng: -73.5387, hardness: 95, level: 'moderate' },
  { city: 'Bridgeport', state: 'CT', zip: '06604', lat: 41.1792, lng: -73.1894, hardness: 92, level: 'moderate' },

  // Virginia
  { city: 'Virginia Beach', state: 'VA', zip: '23451', lat: 36.8529, lng: -75.9780, hardness: 68, level: 'moderate' },
  { city: 'Norfolk', state: 'VA', zip: '23510', lat: 36.8508, lng: -76.2859, hardness: 72, level: 'moderate' },
  { city: 'Richmond', state: 'VA', zip: '23219', lat: 37.5407, lng: -77.4360, hardness: 85, level: 'moderate' },
  { city: 'Arlington', state: 'VA', zip: '22201', lat: 38.8799, lng: -77.1067, hardness: 82, level: 'moderate' },

  // New Jersey
  { city: 'Newark', state: 'NJ', zip: '07102', lat: 40.7357, lng: -74.1724, hardness: 112, level: 'moderate' },
  { city: 'Jersey City', state: 'NJ', zip: '07302', lat: 40.7178, lng: -74.0431, hardness: 98, level: 'moderate' },
  { city: 'Paterson', state: 'NJ', zip: '07505', lat: 40.9168, lng: -74.1718, hardness: 108, level: 'moderate' },
  { city: 'Elizabeth', state: 'NJ', zip: '07201', lat: 40.6640, lng: -74.2107, hardness: 102, level: 'moderate' },

  // Massachusetts (additional)
  { city: 'Worcester', state: 'MA', zip: '01608', lat: 42.2626, lng: -71.8023, hardness: 65, level: 'moderate' },
  { city: 'Springfield', state: 'MA', zip: '01103', lat: 42.1015, lng: -72.5898, hardness: 62, level: 'moderate' },
  { city: 'Cambridge', state: 'MA', zip: '02138', lat: 42.3736, lng: -71.1097, hardness: 54, level: 'soft' },

  // Alaska
  { city: 'Anchorage', state: 'AK', zip: '99501', lat: 61.2181, lng: -149.9003, hardness: 32, level: 'soft' },
  { city: 'Juneau', state: 'AK', zip: '99801', lat: 58.3019, lng: -134.4197, hardness: 38, level: 'soft' },
  { city: 'Fairbanks', state: 'AK', zip: '99701', lat: 64.8378, lng: -147.7164, hardness: 42, level: 'soft' },

  // Arkansas
  { city: 'Little Rock', state: 'AR', zip: '72201', lat: 34.7465, lng: -92.2896, hardness: 138, level: 'hard' },
  { city: 'Fort Smith', state: 'AR', zip: '72901', lat: 35.3859, lng: -94.3985, hardness: 152, level: 'hard' },
  { city: 'Fayetteville', state: 'AR', zip: '72701', lat: 36.0626, lng: -94.1574, hardness: 148, level: 'hard' },

  // Delaware
  { city: 'Wilmington', state: 'DE', zip: '19801', lat: 39.7391, lng: -75.5398, hardness: 92, level: 'moderate' },
  { city: 'Dover', state: 'DE', zip: '19901', lat: 39.1582, lng: -75.5244, hardness: 85, level: 'moderate' },
  { city: 'Newark', state: 'DE', zip: '19711', lat: 39.6837, lng: -75.7497, hardness: 88, level: 'moderate' },

  // Hawaii
  { city: 'Honolulu', state: 'HI', zip: '96813', lat: 21.3099, lng: -157.8581, hardness: 45, level: 'soft' },
  { city: 'Hilo', state: 'HI', zip: '96720', lat: 19.7071, lng: -155.0830, hardness: 52, level: 'soft' },
  { city: 'Kailua', state: 'HI', zip: '96734', lat: 21.4022, lng: -157.7394, hardness: 48, level: 'soft' },

  // Idaho
  { city: 'Boise', state: 'ID', zip: '83702', lat: 43.6150, lng: -116.2023, hardness: 158, level: 'hard' },
  { city: 'Meridian', state: 'ID', zip: '83642', lat: 43.6121, lng: -116.3915, hardness: 162, level: 'hard' },
  { city: 'Nampa', state: 'ID', zip: '83651', lat: 43.5408, lng: -116.5635, hardness: 175, level: 'hard' },
  { city: 'Idaho Falls', state: 'ID', zip: '83402', lat: 43.4666, lng: -112.0341, hardness: 168, level: 'hard' },

  // Iowa
  { city: 'Des Moines', state: 'IA', zip: '50309', lat: 41.5868, lng: -93.6250, hardness: 218, level: 'very_hard' },
  { city: 'Cedar Rapids', state: 'IA', zip: '52402', lat: 41.9779, lng: -91.6656, hardness: 235, level: 'very_hard' },
  { city: 'Davenport', state: 'IA', zip: '52801', lat: 41.5236, lng: -90.5776, hardness: 228, level: 'very_hard' },
  { city: 'Sioux City', state: 'IA', zip: '51101', lat: 42.4970, lng: -96.4003, hardness: 245, level: 'very_hard' },

  // Kansas
  { city: 'Wichita', state: 'KS', zip: '67202', lat: 37.6872, lng: -97.3301, hardness: 228, level: 'very_hard' },
  { city: 'Overland Park', state: 'KS', zip: '66204', lat: 38.9822, lng: -94.6708, hardness: 245, level: 'very_hard' },
  { city: 'Kansas City', state: 'KS', zip: '66101', lat: 39.1141, lng: -94.6275, hardness: 238, level: 'very_hard' },
  { city: 'Topeka', state: 'KS', zip: '66603', lat: 39.0473, lng: -95.6752, hardness: 232, level: 'very_hard' },

  // Maine
  { city: 'Portland', state: 'ME', zip: '04101', lat: 43.6591, lng: -70.2568, hardness: 38, level: 'soft' },
  { city: 'Lewiston', state: 'ME', zip: '04240', lat: 44.1004, lng: -70.2148, hardness: 45, level: 'soft' },
  { city: 'Bangor', state: 'ME', zip: '04401', lat: 44.8016, lng: -68.7712, hardness: 42, level: 'soft' },

  // Mississippi
  { city: 'Jackson', state: 'MS', zip: '39201', lat: 32.2988, lng: -90.1848, hardness: 72, level: 'moderate' },
  { city: 'Gulfport', state: 'MS', zip: '39501', lat: 30.3674, lng: -89.0928, hardness: 62, level: 'moderate' },
  { city: 'Southaven', state: 'MS', zip: '38671', lat: 34.9889, lng: -90.0126, hardness: 68, level: 'moderate' },

  // Montana
  { city: 'Billings', state: 'MT', zip: '59101', lat: 45.7833, lng: -108.5007, hardness: 162, level: 'hard' },
  { city: 'Missoula', state: 'MT', zip: '59801', lat: 46.8721, lng: -113.9940, hardness: 145, level: 'hard' },
  { city: 'Great Falls', state: 'MT', zip: '59401', lat: 47.5053, lng: -111.3008, hardness: 158, level: 'hard' },

  // Nebraska
  { city: 'Omaha', state: 'NE', zip: '68102', lat: 41.2565, lng: -95.9345, hardness: 238, level: 'very_hard' },
  { city: 'Lincoln', state: 'NE', zip: '68508', lat: 40.8136, lng: -96.7026, hardness: 252, level: 'very_hard' },
  { city: 'Bellevue', state: 'NE', zip: '68005', lat: 41.1544, lng: -95.8911, hardness: 242, level: 'very_hard' },

  // New Hampshire
  { city: 'Manchester', state: 'NH', zip: '03101', lat: 42.9956, lng: -71.4548, hardness: 52, level: 'soft' },
  { city: 'Nashua', state: 'NH', zip: '03060', lat: 42.7654, lng: -71.4676, hardness: 45, level: 'soft' },
  { city: 'Concord', state: 'NH', zip: '03301', lat: 43.2081, lng: -71.5376, hardness: 48, level: 'soft' },

  // New Mexico (additional)
  { city: 'Las Cruces', state: 'NM', zip: '88001', lat: 32.3199, lng: -106.7637, hardness: 265, level: 'very_hard' },
  { city: 'Santa Fe', state: 'NM', zip: '87501', lat: 35.6870, lng: -105.9378, hardness: 252, level: 'very_hard' },

  // North Dakota
  { city: 'Fargo', state: 'ND', zip: '58102', lat: 46.8772, lng: -96.7898, hardness: 278, level: 'very_hard' },
  { city: 'Bismarck', state: 'ND', zip: '58501', lat: 46.8083, lng: -100.7837, hardness: 295, level: 'very_hard' },
  { city: 'Grand Forks', state: 'ND', zip: '58201', lat: 47.9253, lng: -97.0329, hardness: 282, level: 'very_hard' },

  // Rhode Island
  { city: 'Providence', state: 'RI', zip: '02903', lat: 41.8240, lng: -71.4128, hardness: 55, level: 'soft' },
  { city: 'Warwick', state: 'RI', zip: '02886', lat: 41.7001, lng: -71.4162, hardness: 48, level: 'soft' },
  { city: 'Cranston', state: 'RI', zip: '02910', lat: 41.7798, lng: -71.4373, hardness: 52, level: 'soft' },

  // South Dakota
  { city: 'Sioux Falls', state: 'SD', zip: '57104', lat: 43.5460, lng: -96.7313, hardness: 258, level: 'very_hard' },
  { city: 'Rapid City', state: 'SD', zip: '57701', lat: 44.0805, lng: -103.2310, hardness: 275, level: 'very_hard' },
  { city: 'Aberdeen', state: 'SD', zip: '57401', lat: 45.4647, lng: -98.4865, hardness: 262, level: 'very_hard' },

  // Utah (additional)
  { city: 'Provo', state: 'UT', zip: '84601', lat: 40.2338, lng: -111.6585, hardness: 308, level: 'very_hard' },
  { city: 'West Valley City', state: 'UT', zip: '84119', lat: 40.6916, lng: -112.0011, hardness: 292, level: 'very_hard' },

  // Vermont
  { city: 'Burlington', state: 'VT', zip: '05401', lat: 44.4759, lng: -73.2121, hardness: 35, level: 'soft' },
  { city: 'Essex', state: 'VT', zip: '05452', lat: 44.4906, lng: -73.1101, hardness: 42, level: 'soft' },
  { city: 'South Burlington', state: 'VT', zip: '05403', lat: 44.4669, lng: -73.1709, hardness: 38, level: 'soft' },

  // West Virginia
  { city: 'Charleston', state: 'WV', zip: '25301', lat: 38.3498, lng: -81.6326, hardness: 132, level: 'hard' },
  { city: 'Huntington', state: 'WV', zip: '25701', lat: 38.4192, lng: -82.4452, hardness: 118, level: 'moderate' },
  { city: 'Morgantown', state: 'WV', zip: '26505', lat: 39.6295, lng: -79.9559, hardness: 125, level: 'hard' },

  // Wyoming
  { city: 'Cheyenne', state: 'WY', zip: '82001', lat: 41.1400, lng: -104.8202, hardness: 218, level: 'very_hard' },
  { city: 'Casper', state: 'WY', zip: '82601', lat: 42.8666, lng: -106.3131, hardness: 235, level: 'very_hard' },
  { city: 'Laramie', state: 'WY', zip: '82070', lat: 41.3114, lng: -105.5911, hardness: 228, level: 'very_hard' }
];

const getHardnessColor = (level) => {
  const colors = {
    soft: '#10b981',
    moderate: '#fbbf24',
    hard: '#f97316',
    very_hard: '#ef4444'
  };
  return colors[level] || '#6b7280';
};

const getHardnessRadius = (hardness) => {
  return Math.max(30000, hardness * 200);
};

function MapUpdater({ center, zoom }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function MapInterface({ selectedLocation, onLocationClick }) {
  const [mapCenter, setMapCenter] = useState([39.8283, -98.5795]); // Center of US
  const [mapZoom, setMapZoom] = useState(5);

  React.useEffect(() => {
    if (selectedLocation) {
      setMapCenter([selectedLocation.lat, selectedLocation.lng]);
      setMapZoom(10);
    }
  }, [selectedLocation]);

  return (
    <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <MapUpdater center={mapCenter} zoom={mapZoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {hardnessData.map((location, index) => (
          <Circle
            key={index}
            center={[location.lat, location.lng]}
            radius={getHardnessRadius(location.hardness)}
            pathOptions={{
              fillColor: getHardnessColor(location.level),
              fillOpacity: 0.3,
              color: getHardnessColor(location.level),
              weight: 2
            }}
            eventHandlers={{
              click: () => onLocationClick(location)
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-slate-900">{location.city}, {location.state}</h3>
                <p className="text-sm text-slate-600">Hardness: {location.hardness} mg/L</p>
                <p className="text-xs text-slate-500 capitalize">{location.level.replace('_', ' ')}</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 z-[1000]">
        <h4 className="font-semibold text-slate-900 mb-3 text-sm">Water Hardness</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-xs text-slate-600">Soft (0-60)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-400" />
            <span className="text-xs text-slate-600">Moderate (61-120)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500" />
            <span className="text-xs text-slate-600">Hard (121-180)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-xs text-slate-600">Very Hard (180+)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { hardnessData };