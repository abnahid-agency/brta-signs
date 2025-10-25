
import type { TrafficSign, Testimonial, User, MCQ } from '@/lib/types';
import mcqData from './mcq-data.json';

export const trafficSigns: TrafficSign[] = [
  { id: '13', titleBangla: 'নির্দিষ্ট সাইন ছাড়া বিপদের সতর্কতা', titleEnglish: 'Warning for a danger with no specific traffic sign.', category: 'Warning', description: 'Warning for a danger with no specific traffic sign.', imageId: 'sign-warning' },
  { id: '14', titleBangla: 'কম উচ্চতায় উড়ন্ত বিমান সতর্কতা', titleEnglish: 'Warning for low-flying aircrafts.', category: 'Warning', description: 'Warning for low-flying aircrafts.', imageId: 'sign-warning-aircraft' },
  { id: '15', titleBangla: 'রাস্তার উপর গরু চলাচলের সতর্কতা', titleEnglish: 'Warning for cattle on the road.', category: 'Warning', description: 'Warning for cattle on the road.', imageId: 'sign-warning-animal-cattle' },
  { id: '16', titleBangla: 'হরিণ পার হওয়ার সতর্কতা', titleEnglish: 'Warning for crossing deer.', category: 'Warning', description: 'Warning for crossing deer.', imageId: 'sign-warning-animal-deer' },
  { id: '17', titleBangla: 'স্পিড বাম্প সতর্কতা', titleEnglish: 'Warning for a speed bump.', category: 'Warning', description: 'Warning for a speed bump.', imageId: 'sign-warning-bump' },
  { id: '18', titleBangla: 'খারাপ সড়ক পৃষ্ঠ সতর্কতা (গর্ত/অভাগ)', titleEnglish: 'Warning for a bad road surface.', category: 'Warning', description: 'Warning for a bad road surface.', imageId: 'sign-warning-bumps' },
  { id: '19', titleBangla: 'শিশুদের সতর্কতা', titleEnglish: 'Warning for children.', category: 'Warning', description: 'Warning for children.', imageId: 'sign-warning-children' },
  { id: '20', titleBangla: 'সকল যানবাহনকে পথ দিন', titleEnglish: 'Give way to all drivers.', category: 'Warning', description: 'Give way to all drivers.', imageId: 'warning-crossroad-give-way' },
  { id: '21', titleBangla: 'চৌরাস্তা সতর্কতা — সকল যানবাহনকে পথ দিন', titleEnglish: 'Warning for a crossroad, give way to all drivers.', category: 'Warning', description: 'Warning for a crossroad, give way to all drivers.', imageId: 'warning-crossroad-give-way-main' },
  { id: '22', titleBangla: 'রাউন্ডঅ্যাবাউট সতর্কতা', titleEnglish: 'Warning for a roundabout.', category: 'Warning', description: 'Warning for a roundabout.', imageId: 'warning-crossroad-roundabout' },
  { id: '23', titleBangla: 'বাম পাশে সাইড রোড সহ চৌরাস্তা সতর্কতা', titleEnglish: 'Warning for a crossroad with a side road on the left.', category: 'Warning', description: 'Warning for a crossroad with a side road on the left.', imageId: 'warning-crossroad-side-road-left' },
  { id: '24', titleBangla: 'ডান পাশে সাইড রোড সহ চৌরাস্তা সতর্কতা', titleEnglish: 'Warning for a crossroad with side road on the right.', category: 'Warning', description: 'Warning for a crossroad with side road on the right.', imageId: 'warning-crossroad-side-road-right' },
  { id: '25', titleBangla: 'বাম ও ডান পাশে সাইড রোড সহ চৌরাস্তা সতর্কতা', titleEnglish: 'Warning for a crossroad side roads on the left and right.', category: 'Warning', description: 'Warning for a crossroad side roads on the left and right.', imageId: 'warning-crossroad-side-roads' },
  { id: '26', titleBangla: 'রাস্তাগুলো পরস্পর বিপরীত নয় এমন চৌরাস্তার সতর্কতা', titleEnglish: 'Warning for a crossroad where the roads are not opposite to each other.', category: 'Warning', description: 'Warning for a crossroad where the roads are not opposite to each other.', imageId: 'warning-crossroad-side-roads_v1' },
  { id: '27', titleBangla: 'রাস্তাগুলো পরস্পর বিপরীত নয় এমন চৌরাস্তা (ভ্যারিয়েন্ট) সতর্কতা', titleEnglish: 'Warning for a crossroad where the roads are not opposite to each other.', category: 'Warning', description: 'Warning for a crossroad where the roads are not opposite to each other.', imageId: 'warning-crossroad-side-roads_v2' },
  { id: '28', titleBangla: 'থামুন এবং সকলকে পথ দিন', titleEnglish: 'Stop and give way to all drivers.', category: 'Warning', description: 'Stop and give way to all drivers.', imageId: 'warning-crossroad-stop' },
  { id: '29', titleBangla: 'নিয়ন্ত্রিত নয় এমন T-চৌরাস্তার সতর্কতা', titleEnglish: 'Warning for an uncontrolled T-crossroad.', category: 'Warning', description: 'Warning for an uncontrolled T-crossroad.', imageId: 'warning-crossroad-t' },
  { id: '30', titleBangla: 'নিয়ন্ত্রিত নয় এমন Y-চৌরাস্তার সতর্কতা', titleEnglish: 'Warning for an uncontrolled Y-crossroad.', category: 'Warning', description: 'Warning for an uncontrolled Y-crossroad.', imageId: 'warning-crossroad-y' },
  { id: '31', titleBangla: 'U-টার্ন (হেয়ারপিন) সতর্কতা', titleEnglish: 'Warning for a U-turn.', category: 'Warning', description: 'Warning for a U-turn.', imageId: 'sign-warning-curve-hairpin' },
  { id: '32', titleBangla: 'U-টার্ন (ভ্যারিয়েন্ট) সতর্কতা', titleEnglish: 'Warning for a U-turn.', category: 'Warning', description: 'Warning for a U-turn.', imageId: 'sign-warning-curve-hairpin_v1' },
  { id: '33', titleBangla: 'বামে বাঁক সতর্কতা', titleEnglish: 'Warning for a curve to the left.', category: 'Warning', description: 'Warning for a curve to the left.', imageId: 'sign-warning-curve-left' },
  { id: '34', titleBangla: 'দুইটি বাঁক সতর্কতা — প্রথমে বাম, পরে ডান', titleEnglish: 'Warning for a double curve, first left then right.', category: 'Warning', description: 'Warning for a double curve, first left then right.', imageId: 'sign-warning-curve-left-right' },
  { id: '35', titleBangla: 'ডানে বাঁক সতর্কতা', titleEnglish: 'Warning for a curve to the right.', category: 'Warning', description: 'Warning for a curve to the right.', imageId: 'sign-warning-curve-right' },
  { id: '36', titleBangla: 'দুইটি বাঁক সতর্কতা — প্রথমে ডান, পরে বাম', titleEnglish: 'Warning for a double curve, first right then left.', category: 'Warning', description: 'Warning for a double curve, first right then left.', imageId: 'sign-warning-curve-right-left' },
  { id: '37', titleBangla: 'সড়কে গভীর অংশ/ডিপ সতর্কতা (বন্যা প্রবণ)', titleEnglish: 'Warning for a dip in the road.', category: 'Warning', description: 'Warning for a dip in the road.', imageId: 'sign-warning-dip' },
  { id: '38', titleBangla: 'বয়স্ক ব্যক্তিদের সতর্কতা', titleEnglish: 'Warning for elderly.', category: 'Warning', description: 'Warning for elderly.', imageId: 'sign-warning-elderly' },
  { id: '39', titleBangla: 'পাথর পড়ার সতর্কতা / রকফল সতর্কতা', titleEnglish: 'Warning for falling rocks.', category: 'Warning', description: 'Warning for falling rocks.', imageId: 'sign-warning-falling-rocks' },
  { id: '40', titleBangla: 'সীমিত উচ্চতার সতর্কতা (হেডরুম সীমা)', titleEnglish: 'Warning for a limited height.', category: 'Warning', description: 'Warning for a limited height.', imageId: 'sign-warning-height' },
  { id: '41', titleBangla: 'রাস্তার পৃষ্ঠে ঢিলে পাথর/চিপস সতর্কতা', titleEnglish: 'Warning for loose chippings on the road surface.', category: 'Warning', description: 'Warning for loose chippings on the road surface.', imageId: 'sign-warning-loose-chippings' },
  { id: '42', titleBangla: 'সড়ক সংকুচিত হওয়ার সতর্কতা', titleEnglish: 'Warning for a narrowing.', category: 'Warning', description: 'Warning for a narrowing.', imageId: 'sign-warning-narrowing' },
  { id: '43', titleBangla: 'পাকুর/পথচারী সতর্কতা', titleEnglish: 'Warning for pedestrians.', category: 'Warning', description: 'Warning for pedestrians.', imageId: 'sign-warning-pedestrian' },
  { id: '44', titleBangla: 'পথচারী পারাপারের সতর্কতা (ক্রসিং)', titleEnglish: 'Warning for a crossing for pedestrians.', category: 'Warning', description: 'Warning for a crossing for pedestrians.', imageId: 'sign-warning-pedestrian-crossing' },
  { id: '45', titleBangla: 'কোই/নদীর ধারের সতর্কতা', titleEnglish: 'Warning for a quayside or riverbank.', category: 'Warning', description: 'Warning for a quayside or riverbank.', imageId: 'sign-warning-quayside' },
  { id: '46', titleBangla: 'রিকশা সতর্কতা', titleEnglish: 'Warning for rickshaws.', category: 'Warning', description: 'Warning for rickshaws.', imageId: 'sign-warning-rickshaw' },
  { id: '47', titleBangla: 'দুই রোড মিলিত হওয়ার সতর্কতা (Merge)', titleEnglish: 'Warning for two roads that merge.', category: 'Warning', description: 'Warning for two roads that merge.', imageId: 'sign-warning-road-merge' },
  { id: '48', titleBangla: 'বাম দিক থেকে রাস্তা সংকুচিত হওয়া সতর্কতা', titleEnglish: 'Warning for a road narrowing on the left.', category: 'Warning', description: 'Warning for a road narrowing on the left.', imageId: 'sign-warning-road-narrowing-left' },
  { id: '49', titleBangla: 'ডান দিক থেকে রাস্তা সংকুচিত হওয়া সতর্কতা', titleEnglish: 'Warning for a road narrowing on the right.', category: 'Warning', description: 'Warning for a road narrowing on the right.', imageId: 'sign-warning-road-narrowing-right' },
  { id: '50', titleBangla: 'রাস্তায় নির্মাণ/মেরামতের কাজ সতর্কতা', titleEnglish: 'Warning for roadworks.', category: 'Warning', description: 'Warning for roadworks.', imageId: 'sign-warning-roadworks' },
  { id: '51', titleBangla: 'পিচ্ছিল সড়ক সতর্কতা', titleEnglish: 'Warning for a slippery road surface.', category: 'Warning', description: 'Warning for a slippery road surface.', imageId: 'sign-warning-slippery-road' },
  { id: '52', titleBangla: 'নরম ধারে (ভার্জ) সতর্কতা', titleEnglish: 'Warning for a soft verge.', category: 'Warning', description: 'Warning for a soft verge.', imageId: 'sign-warning-soft-verge' },
  { id: '53', titleBangla: 'কঠোর উত্থান সতর্কতা', titleEnglish: 'Warning for a steep ascent.', category: 'Warning', description: 'Warning for a steep ascent.', imageId: 'sign-warning-steep-ascent' },
  { id: '54', titleBangla: 'কঠোর অবতরণ সতর্কতা', titleEnglish: 'Warning for a steep descent.', category: 'Warning', description: 'Warning for a steep descent.', imageId: 'sign-warning-steep-descent' },
  { id: '55', titleBangla: 'ট্রাফিক লাইট সতর্কতা', titleEnglish: 'Warning for a traffic light.', category: 'Warning', description: 'Warning for a traffic light.', imageId: 'sign-warning-traffic-lights' },
  { id: '56', titleBangla: 'বাধা ছাড়া রেলক্রসিং সতর্কতা', titleEnglish: 'Warning for a railroad crossing without barriers.', category: 'Warning', description: 'Warning for a railroad crossing without barriers.', imageId: 'sign-warning-train-crossing' },
  { id: '57', titleBangla: 'বাধাসহ রেলক্রসিং সতর্কতা', titleEnglish: 'Warning for a railroad crossing with barriers.', category: 'Warning', description: 'Warning for a railroad crossing with barriers.', imageId: 'sign-warning-train-crossing-barriers' },
  { id: '58', titleBangla: 'একটি রেলপথ সহ রেলক্রসিং সতর্কতা', titleEnglish: 'Warning for a railroad crossing with 1 railway.', category: 'Warning', description: 'Warning for a railroad crossing with 1 railway.', imageId: 'sign-warning-train-rail' },
  { id: '59', titleBangla: 'বহু রেলপথ সহ রেলক্রসিং সতর্কতা', titleEnglish: 'Warning for a railroad crossing with more than 1 railway.', category: 'Warning', description: 'Warning for a railroad crossing with more than 1 railway.', imageId: 'sign-warning-train-rails' },
  { id: '60', titleBangla: 'দুই দিকে চলাচলকারী সড়ক সতর্কতা (Two-way traffic)', titleEnglish: 'Warning for a road with two-way traffic.', category: 'Warning', description: 'Warning for a road with two-way traffic.', imageId: 'sign-warning-two-way-traffic' },
  { id: '61', titleBangla: 'সাইকেল চালানো নিষিদ্ধ', titleEnglish: 'Cyclists prohibited.', category: 'Mandatory', description: 'Cyclists prohibited.', imageId: 'prohibited-access-cyclist' },
  { id: '62', titleBangla: 'দিক প্রবেশ বন্ধ (এক দিকে যান চালনা)', titleEnglish: 'Direction prohibited (road with one-way traffic).', category: 'Mandatory', description: 'Direction prohibited (road with one-way traffic).', imageId: 'prohibited-access-entry' },
  { id: '63', titleBangla: 'হ্যান্ডকার্ট / ঠেলাধরা গাড়ি নিষিদ্ধ', titleEnglish: 'Handcarts prohibited.', category: 'Mandatory', description: 'Handcarts prohibited.', imageId: 'prohibited-access-handcart' },
  { id: '64', titleBangla: 'ঘোড়া তথ্যযুক্ত রিকশা/গাড়ি নিষিদ্ধ', titleEnglish: 'Horsecarts prohibited.', category: 'Mandatory', description: 'Horsecarts prohibited.', imageId: 'prohibited-access-horse-cart' },
  { id: '65', titleBangla: 'মোটরসাইকেল ও গাড়ি নিষিদ্ধ', titleEnglish: 'Motorcycles and cars prohibited.', category: 'Mandatory', description: 'Motorcycles and cars prohibited.', imageId: 'prohibited-access-motorcycle-car' },
  { id: '66', titleBangla: 'পদচারী চলাচল নিষিদ্ধ', titleEnglish: 'Pedestrians prohibited.', category: 'Mandatory', description: 'Pedestrians prohibited.', imageId: 'prohibited-access-pedestrian' },
  { id: '67', titleBangla: 'রিকশা নিষিদ্ধ', titleEnglish: 'Rickshaws prohibited.', category: 'Mandatory', description: 'Rickshaws prohibited.', imageId: 'prohibited-access-rickshaw' },
  { id: '68', titleBangla: 'ট্র্যাক্টর চলাচল নিষিদ্ধ', titleEnglish: 'Tractors prohibited.', category: 'Mandatory', description: 'Tractors prohibited.', imageId: 'prohibited-access-tractor' },
  { id: '69', titleBangla: 'ট্রাক/বড় যানবাহন নিষিদ্ধ', titleEnglish: 'Trucks prohibited.', category: 'Mandatory', description: 'Trucks prohibited.', imageId: 'prohibited-access-truck' },
  { id: '70', titleBangla: 'হর্ন বাজানো নিষিদ্ধ', titleEnglish: 'Using the horn prohibited.', category: 'Mandatory', description: 'Using the horn prohibited.', imageId: 'prohibited-action-horn' },
  { id: '71', titleBangla: 'অতিক্রম করা (ওভারটেক) নিষিদ্ধ', titleEnglish: 'Overtaking prohibited.', category: 'Mandatory', description: 'Overtaking prohibited.', imageId: 'prohibited-action-overtaking' },
  { id: '72', titleBangla: 'গতিসীমা শুরু', titleEnglish: 'Begin of a speed limit.', category: 'Mandatory', description: 'Begin of a speed limit.', imageId: 'prohibited-action-speed' },
  { id: '73', titleBangla: 'গতিসীমা শেষ', titleEnglish: 'End of the speed limit.', category: 'Mandatory', description: 'End of the speed limit.', imageId: 'prohibited-action-speed_end' },
  { id: '74', titleBangla: 'বামে ঘোরা নিষিদ্ধ', titleEnglish: 'Turning left prohibited.', category: 'Mandatory', description: 'Turning left prohibited.', imageId: 'prohibited-action-turn-left' },
  { id: '75', titleBangla: 'ডানে ঘোরা নিষিদ্ধ', titleEnglish: 'Turning right prohibited.', category: 'Mandatory', description: 'Turning right prohibited.', imageId: 'prohibited-action-turn-right' },
  { id: '76', titleBangla: 'U-টার্ন/পিছনে ফিরে যাওয়া নিষিদ্ধ', titleEnglish: 'Turning around prohibited (U-turn).', category: 'Mandatory', description: 'Turning around prohibited (U-turn).', imageId: 'prohibited-action-turn-u' },
  { id: '77', titleBangla: 'বিস্ফোরক পদার্থ বহনকারী যানবাহন নিষিদ্ধ', titleEnglish: 'Vehicles with explosive materials prohibited.', category: 'Mandatory', description: 'Vehicles with explosive materials prohibited.', imageId: 'prohibited-cargo-explosive' },
  { id: '78', titleBangla: 'নির্দিষ্ট উচ্চতার চেয়ে উঁচু যানবাহন নিষিদ্ধ', titleEnglish: 'Vehicles higher than indicated prohibited.', category: 'Mandatory', description: 'Vehicles higher than indicated prohibited.', imageId: 'prohibited-cargo-height' },
  { id: '79', titleBangla: 'নির্দিষ্ট দৈর্ঘ্যের চেয়ে লম্বা যানবাহন নিষিদ্ধ', titleEnglish: 'Vehicles longer than indicated prohibited.', category: 'Mandatory', description: 'Vehicles longer than indicated prohibited.', imageId: 'prohibited-cargo-length' },
  { id: '80', titleBangla: 'নির্দিষ্ট ওজন ছাড়িয়ে যাওয়া যানবাহন নিষিদ্ধ', titleEnglish: 'Vehicles heavier than indicated prohibited.', category: 'Mandatory', description: 'Vehicles heavier than indicated prohibited.', imageId: 'prohibited-cargo-weight' },
  { id: '81', titleBangla: 'নির্দিষ্ট অক্ষ-ওজন ছাড়িয়ে যাওয়া যানবাহন নিষিদ্ধ', titleEnglish: 'Vehicles with an axle weight heavier than indicated prohibited.', category: 'Mandatory', description: 'Vehicles with an axle weight heavier than indicated prohibited.', imageId: 'prohibited-cargo-weight-axle' },
  { id: '82', titleBangla: 'নির্দিষ্ট প্রস্থের চেয়ে প্রশস্ত যানবাহন নিষিদ্ধ', titleEnglish: 'Vehicles wider than indicated prohibited.', category: 'Mandatory', description: 'Vehicles wider than indicated prohibited.', imageId: 'prohibited-cargo-width' },
  { id: '83', titleBangla: 'প্রবেশ নিষিদ্ধ (চেকপয়েন্ট)', titleEnglish: 'Entry prohibited (checkpoint).', category: 'Mandatory', description: 'Entry prohibited (checkpoint).', imageId: 'prohibited-entry-checkpoint' },
  { id: '84', titleBangla: 'পার্কিং নিষিদ্ধ', titleEnglish: 'Parking prohibited.', category: 'Mandatory', description: 'Parking prohibited.', imageId: 'prohibited-parking' },
  { id: '85', titleBangla: 'পার্কিং এবং থামা উভয়ই নিষিদ্ধ', titleEnglish: 'Parking and stopping prohibited.', category: 'Mandatory', description: 'Parking and stopping prohibited.', imageId: 'prohibited-parking-stopping' },
  { id: '86', titleBangla: 'বামে মোড় নেওয়া বাধ্যতামূলক', titleEnglish: 'Turning left mandatory.', category: 'Mandatory', description: 'Turning left mandatory.', imageId: 'mandatory-direction-ahead-turn-left' },
  { id: '87', titleBangla: 'ডানে মোড় নেওয়া বাধ্যতামূলক', titleEnglish: 'Turning right mandatory.', category: 'Mandatory', description: 'Turning right mandatory.', imageId: 'mandatory-direction-ahead-turn-right' },
  { id: '88', titleBangla: 'বামে দিয়ে পাশ করা বাধ্যতামূলক', titleEnglish: 'Passing left mandatory.', category: 'Mandatory', description: 'Passing left mandatory.', imageId: 'mandatory-direction-pass-left' },
  { id: '89', titleBangla: 'বামে বা ডানে দিয়ে পাশ করা বাধ্যতামূলক', titleEnglish: 'Passing left or right mandatory.', category: 'Mandatory', description: 'Passing left or right mandatory.', imageId: 'mandatory-direction-pass-left-right' },
  { id: '90', titleBangla: 'ডানে দিয়ে পাশ করা বাধ্যতামূলক', titleEnglish: 'Passing right mandatory.', category: 'Mandatory', description: 'Passing right mandatory.', imageId: 'mandatory-direction-pass-right' },
  { id: '91', titleBangla: 'রাউন্ডঅ্যাবাউটের বাধ্যতামূলক দিক', titleEnglish: 'Mandatory direction of the roundabout.', category: 'Mandatory', description: 'Mandatory direction of the roundabout.', imageId: 'mandatory-direction-roundabout' },
  { id: '92', titleBangla: 'বামে যাওয়া বাধ্যতামূলক', titleEnglish: 'Mandatory left.', category: 'Mandatory', description: 'Mandatory left.', imageId: 'mandatory-direction-turn-left' },
  { id: '93', titleBangla: 'ডানে যাওয়া বাধ্যতামূলক', titleEnglish: 'Mandatory right.', category: 'Mandatory', description: 'Mandatory right.', imageId: 'mandatory-direction-turn-right' },
  { id: '94', titleBangla: 'সরাসরি এগোনো বাধ্যতামূলক', titleEnglish: 'Driving straight ahead mandatory.', category: 'Mandatory', description: 'Driving straight ahead mandatory.', imageId: 'mandatory-direction-up' },
  { id: '95', titleBangla: 'সাইকেল চালকদের জন্য বাধ্যতামূলক পথ', titleEnglish: 'Mandatory path for cyclists.', category: 'Mandatory', description: 'Mandatory path for cyclists.', imageId: 'mandatory-lane-cyclist' },
  { id: '96', titleBangla: 'রিকশার জন্য বাধ্যতামূলক পথ', titleEnglish: 'Mandatory path for rickshaws.', category: 'Mandatory', description: 'Mandatory path for rickshaws.', imageId: 'mandatory-lane-rickshaw' },
  { id: '97', titleBangla: 'সামনে রাস্তা শেষ', titleEnglish: 'No Through Road', category: 'Informatory', description: 'The road ahead is closed. You cannot go through.', imageId: 'info-no-through-road' },
  { id: '98', titleBangla: 'পথচারী পারাপার', titleEnglish: 'Pedestrian Crossing', category: 'Informatory', description: 'Indicates a designated pedestrian crossing area.', imageId: 'info-pedestrian-crossing' },
  { id: '99', titleBangla: 'পার্কিংয়ের জন্য নির্ধারিত স্থান', titleEnglish: 'Parking Place', category: 'Informatory', description: 'Area designated for vehicle parking.', imageId: 'info-parking' },
  { id: '100', titleBangla: 'ফিলিং স্টেশন (পেট্রোল পাম্প)', titleEnglish: 'Filling Station', category: 'Informatory', description: 'Indicates a nearby fuel station.', imageId: 'info-gas-station' },
  { id: '101', titleBangla: 'মোটরযান মেরামতস্থল', titleEnglish: 'Breakdown Service', category: 'Informatory', description: 'Indicates a vehicle repair service is available.', imageId: 'info-breakdown-service' },
  { id: '102', titleBangla: 'পাবলিক টেলিফোন সেন্টার বা বুথ', titleEnglish: 'Telephone', category: 'Informatory', description: 'Indicates a public telephone is available.', imageId: 'info-telephone' },
  { id: '103', titleBangla: 'রাত্রিযাপনের ব্যবস্থা আছে', titleEnglish: 'Overnight Accommodation', category: 'Informatory', description: 'Indicates that lodging or accommodation is available.', imageId: 'info-accommodation' },
  { id: '104', titleBangla: 'প্রাথমিক চিকিৎসা কেন্দ্র', titleEnglish: 'First-Aid Post', category: 'Informatory', description: 'Indicates a first-aid station is available.', imageId: 'info-first-aid' },
  { id: '105', titleBangla: 'হাসপাতাল', titleEnglish: 'Hospital', category: 'Informatory', description: 'Indicates a hospital is nearby.', imageId: 'info-hospital' },
  { id: '106', titleBangla: 'চা ও হালকা খাবারের ব্যবস্থা আছে', titleEnglish: 'Refreshments', category: 'Informatory', description: 'Indicates that refreshments are available.', imageId: 'info-refreshments' },
  { id: '107', titleBangla: 'রেস্তোরাঁ', titleEnglish: 'Restaurant', category: 'Informatory', description: 'Indicates a restaurant is available.', imageId: 'info-restaurant' },
  { id: '108', titleBangla: 'বনভোজন এলাকা', titleEnglish: 'Picnic Site', category: 'Informatory', description: 'Indicates a designated area for picnics.', imageId: 'info-picnic-site' },
  { id: '109', titleBangla: 'মসজিদ', titleEnglish: 'Mosque', category: 'Informatory', description: 'Indicates a mosque is nearby.', imageId: 'info-mosque' },
  { id: '110', titleBangla: 'মন্দির', titleEnglish: 'Temple', category: 'Informatory', description: 'Indicates a temple is nearby.', imageId: 'info-temple' },
  { id: '111', titleBangla: 'গির্জা', titleEnglish: 'Church', category: 'Informatory', description: 'Indicates a church is nearby.', imageId: 'info-church' },
  { id: '112', titleBangla: 'দমকল বাহিনী', titleEnglish: 'Fire Station', category: 'Informatory', description: 'Indicates a fire station is nearby.', imageId: 'info-fire-station' },
  { id: '113', titleBangla: 'টয়লেট বা শৌচাগার', titleEnglish: 'Toilets', category: 'Informatory', description: 'Indicates public toilets are available.', imageId: 'info-toilets' },
  { id: '114', titleBangla: 'পথচারী, সাইকেল এবং রিকশা চলাচলের অনুমোদিত রাস্তা', titleEnglish: 'Recommended route for pedestrians, cycles and rickshaws', category: 'Informatory', description: 'Recommended route for pedestrians, cycles, and rickshaws.', imageId: 'info-recommended-route' },
  { id: '115', titleBangla: 'সাইকেল এবং রিকশা চলাচলের অনুমোদিত লেন', titleEnglish: 'Lane for cycles and rickshaws', category: 'Informatory', description: 'Designated lane for cycles and rickshaws.', imageId: 'info-cycle-rickshaw-lane' },
  { id: '116', titleBangla: 'বাস থামার স্থান', titleEnglish: 'Bus Stop', category: 'Informatory', description: 'Indicates a bus stop.', imageId: 'info-bus-stop' },
  { id: '117', titleBangla: 'ট্যাক্সি পার্কিংয়ের স্থান', titleEnglish: 'Taxi Park', category: 'Informatory', description: 'Indicates a taxi parking area.', imageId: 'info-taxi-park' },
  { id: '118', titleBangla: 'থানা/পুলিশ ফাঁড়ি', titleEnglish: 'Police Station', category: 'Informatory', description: 'Indicates a police station is nearby.', imageId: 'info-police-station' },
  { id: '119', titleBangla: 'টোল সড়ক অথবা টোল সেতু', titleEnglish: 'Toll Road or Bridge', category: 'Informatory', description: 'Indicates a toll is required for the road or bridge ahead.', imageId: 'info-toll-road' }
];

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Rahim Ahmed', district: 'Dhaka', comment: 'This website is fantastic! I passed my theory test on the first try thanks to the mock exams.', avatarId: 'avatar-1' },
  { id: '2', name: 'Fatima Chowdhury', district: 'Chittagong', comment: 'The traffic sign library is very helpful. Everything is explained clearly in Bangla.', avatarId: 'avatar-2' },
  { id: '3', name: 'Sohel Rana', district: 'Sylhet', comment: 'I love the simple design and how easy it is to use on my phone. 10/10 would recommend.', avatarId: 'avatar-3' },
];

export const users: User[] = [
  { id: '1', name: 'Rahim Ahmed', avatarId: 'avatar-1' },
  { id: '2', name: 'Fatima Chowdhury', avatarId: 'avatar-2' },
  { id: '3', name: 'Sohel Rana', avatarId: 'avatar-3' },
];

const banglaToEnglishKeyMap: { [key: string]: 'a' | 'b' | 'c' | 'd' } = {
  'ক': 'a',
  'খ': 'b',
  'গ': 'c',
  'ঘ': 'd',
};

const transformedMcqs: MCQ[] = mcqData.questions.map(q => {
  const options: { a: string; b: string; c: string; d: string; } = { a: '', b: '', c: '', d: '' };
  
  for (const key in q.options) {
      const mappedKey = banglaToEnglishKeyMap[key as keyof typeof banglaToEnglishKeyMap];
      if (mappedKey) {
          options[mappedKey] = (q.options as any)[key];
      }
  }

  const correctOption = banglaToEnglishKeyMap[q.correct_option as keyof typeof banglaToEnglishKeyMap];

  return {
    id: q.id.toString(),
    topic: 'Driving Rules & Regulations', // All questions are under this topic for now
    question: q.question_bn,
    options: options,
    correctOption: correctOption,
    explanation: q.correct_answer_bn,
    // imageId is not present in the new data, so it will be undefined
  };
});

export const mcqs: MCQ[] = transformedMcqs;
