/// <reference path="natdex.ts" />
module Pokedex {
    export var Regional: { [key: string]: (number | string)[] } = {
        "National": PokeList.map((v, i) => i),
        "Kanto": PokeList.map((v, i) => i).filter(i => i <= GenSlice[1]),
        "New": [],
        "Johto": [-1, 152, 153, 154, 155, 156, 157, 158, 159, 160, 16, 17, 18, 21, 22, 163, 164, 19, 20, 161, 162, 172, 25, 26, 10, 11, 12, 13, 14, 15, 165, 166, 167, 168, 74, 75, 76, 41, 42, 169, 173, 35, 36, 174, 39, 40, 175, 176, 27, 28, 23, 24, 206, 179, 180, 181, 194, 195, 92, 93, 94, 201, 95, 208, 69, 70, 71, 187, 188, 189, 46, 47, 60, 61, 62, 186, 129, 130, 118, 119, 79, 80, 199, 43, 44, 45, 182, 96, 97, 63, 64, 65, 132, 204, 205, 29, 30, 31, 32, 33, 34, 193, 469, 191, 192, 102, 103, 185, 202, 48, 49, 123, 212, 127, 214, 109, 110, 88, 89, 81, 82, 100, 101, 190, 424, 209, 210, 37, 38, 58, 59, 234, 183, 184, 50, 51, 56, 57, 52, 53, 54, 55, 66, 67, 68, 236, 106, 107, 237, 203, 128, 241, 240, 126, 238, 124, 239, 125, 122, 235, 83, 177, 178, 211, 72, 73, 98, 99, 213, 120, 121, 90, 91, 222, 223, 224, 170, 171, 86, 87, 108, 463, 114, 465, 133, 134, 135, 136, 196, 197, 116, 117, 230, 207, 225, 220, 221, 473, 216, 217, 231, 232, 226, 227, 84, 85, 77, 78, 104, 105, 115, 111, 112, 198, 228, 229, 218, 219, 215, 200, 137, 233, 113, 242, 131, 138, 139, 140, 141, 142, 143, 1, 2, 3, 4, 5, 6, 7, 8, 9, 144, 145, 146, 243, 244, 245, 147, 148, 149, 246, 247, 248, 249, 250, 150, 151, 251],
        "Hoenn": [],
        "New Hoenn": [-1, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 475, 283, 284, 285, 286, 287, 288, 289, 63, 64, 65, 290, 291, 292, 293, 294, 295, 296, 297, 118, 119, 129, 130, 298, 183, 184, 74, 75, 76, 299, 476, 300, 301, 41, 42, 169, 72, 73, 302, 303, 304, 305, 306, 66, 67, 68, 307, 308, 309, 310, 311, 312, 81, 82, 462, 100, 101, 313, 314, 43, 44, 45, 182, 84, 85, 406, 315, 407, 316, 317, 318, 319, 320, 321, 322, 323, 218, 219, 324, 88, 89, 109, 110, 325, 326, 27, 28, 327, 227, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 174, 39, 40, 349, 350, 351, 120, 121, 352, 353, 354, 355, 356, 477, 357, 433, 358, 359, 37, 38, 172, 25, 26, 54, 55, 360, 202, 177, 178, 203, 231, 232, 127, 214, 111, 112, 464, 361, 362, 478, 363, 364, 365, 366, 367, 368, 369, 222, 170, 171, 370, 116, 117, 230, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386],
        "Sinnoh": [],
        "Enhanced Sinnoh": [-1, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 63, 64, 65, 129, 130, 406, 315, 407, 41, 42, 169, 74, 75, 76, 95, 208, 408, 409, 410, 411, 66, 67, 68, 54, 55, 412, 413, 414, 265, 266, 267, 268, 269, 415, 416, 417, 418, 419, 420, 421, 422, 423, 214, 190, 424, 425, 426, 427, 428, 92, 93, 94, 200, 429, 198, 430, 431, 432, 118, 119, 339, 340, 433, 358, 434, 435, 307, 308, 436, 437, 77, 78, 438, 185, 439, 122, 440, 113, 242, 173, 35, 36, 441, 172, 25, 26, 163, 164, 442, 443, 444, 445, 446, 143, 201, 447, 448, 194, 195, 278, 279, 203, 449, 450, 298, 183, 184, 451, 452, 453, 454, 455, 223, 224, 456, 457, 72, 73, 349, 350, 458, 226, 459, 460, 215, 461, 480, 481, 482, 483, 484, 490, 479, 207, 472, 299, 476, 280, 281, 282, 475, 108, 463, 133, 134, 135, 136, 196, 197, 470, 471, 333, 334, 175, 176, 468, 228, 229, 81, 82, 462, 114, 465, 193, 469, 357, 111, 112, 464, 355, 356, 477, 137, 233, 474, 123, 212, 239, 125, 466, 240, 126, 467, 220, 221, 473, 361, 362, 478, 359, 487],
        "Unova": [494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649],
        "New Unova": [494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 509, 510, 519, 520, 521, 540, 541, 542, 191, 192, 506, 507, 508, 179, 180, 181, 54, 55, 298, 183, 184, 447, 448, 206, 531, 511, 512, 513, 514, 515, 516, 543, 544, 545, 109, 110, 81, 82, 462, 58, 59, 240, 126, 467, 239, 125, 466, 19, 20, 41, 42, 169, 88, 89, 527, 528, 524, 525, 526, 95, 208, 532, 533, 534, 529, 530, 300, 301, 427, 428, 546, 547, 548, 549, 517, 518, 173, 35, 36, 133, 134, 135, 136, 196, 197, 470, 471, 551, 552, 553, 554, 555, 550, 568, 569, 572, 573, 627, 628, 629, 630, 27, 28, 557, 558, 559, 560, 556, 561, 328, 329, 330, 562, 563, 564, 565, 566, 567, 599, 600, 601, 406, 315, 407, 574, 575, 576, 577, 578, 579, 415, 416, 587, 214, 127, 522, 523, 418, 419, 570, 571, 580, 581, 588, 589, 616, 617, 585, 586, 590, 591, 351, 299, 476, 304, 305, 306, 343, 344, 636, 637, 595, 596, 597, 598, 602, 603, 604, 592, 593, 594, 610, 611, 612, 335, 336, 605, 606, 607, 608, 609, 631, 632, 613, 614, 615, 641, 642, 645, 451, 452, 227, 322, 323, 325, 326, 425, 426, 353, 354, 278, 279, 337, 338, 359, 114, 465, 619, 620, 207, 472, 624, 625, 638, 639, 640, 535, 536, 537, 618, 213, 458, 226, 223, 224, 222, 120, 121, 320, 321, 131, 363, 364, 365, 333, 334, 37, 38, 436, 437, 215, 461, 225, 582, 583, 584, 220, 221, 473, 132, 374, 375, 376, 86, 87, 538, 539, 626, 621, 622, 623, 633, 634, 635, 287, 288, 289, 341, 342, 174, 39, 40, 108, 463, 193, 469, 357, 455, 453, 454, 246, 247, 248, 643, 644, 646, 647, 648, 649],
        "Central Kalos": [-1, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 263, 264, 661, 662, 663, 16, 17, 18, 664, 665, 666, 10, 11, 12, 13, 14, 15, 511, 512, 513, 514, 515, 516, 172, 25, 26, 399, 400, 206, 298, 183, 184, 412, 413, 414, 283, 284, 129, 130, 341, 342, 118, 119, 318, 319, 667, 668, 54, 55, 83, 447, 448, 280, 281, 282, 475, 669, 670, 671, 406, 315, 407, 165, 166, 415, 416, 300, 301, 1, 2, 3, 4, 5, 6, 7, 8, 9, 672, 673, 674, 675, 676, 84, 85, 311, 312, 316, 317, 559, 560, 63, 64, 65, 43, 44, 45, 182, 161, 162, 290, 291, 292, 677, 678, 352, 679, 680, 681, 543, 544, 545, 531, 235, 453, 454, 580, 581, 682, 683, 684, 685, 313, 314, 187, 188, 189, 446, 143, 293, 294, 295, 307, 308, 41, 42, 169, 610, 611, 612, 719, 720, 721],
        "Coastal Kalos": [-1, 425, 426, 619, 620, 335, 336, 325, 326, 359, 686, 687, 337, 338, 371, 372, 373, 278, 279, 276, 277, 688, 689, 557, 558, 72, 73, 320, 321, 370, 690, 691, 692, 693, 120, 121, 90, 91, 211, 116, 117, 230, 369, 551, 552, 553, 694, 695, 449, 450, 111, 112, 464, 95, 208, 527, 528, 66, 67, 68, 104, 105, 115, 303, 696, 697, 698, 699, 142, 597, 598, 209, 210, 309, 310, 228, 229, 133, 134, 135, 136, 196, 197, 470, 471, 700, 587, 193, 469, 701, 561, 622, 623, 299, 476, 296, 297, 538, 539, 396, 397, 398, 434, 435, 29, 30, 31, 32, 33, 34, 702, 433, 358, 439, 122, 577, 578, 579, 360, 202, 524, 525, 526, 302, 703, 128, 241, 179, 180, 181, 127, 214, 417, 79, 80, 199, 102, 103, 441, 458, 226, 366, 367, 368, 223, 224, 222, 170, 171, 594, 131, 144, 145, 146],
        "Mountain Kalos": [-1, 50, 51, 328, 329, 330, 443, 444, 445, 74, 75, 76, 218, 219, 213, 451, 452, 194, 195, 704, 705, 706, 588, 589, 616, 617, 69, 70, 71, 455, 92, 93, 94, 60, 61, 62, 186, 23, 24, 618, 339, 340, 509, 510, 261, 262, 504, 505, 624, 625, 707, 198, 430, 590, 591, 270, 271, 272, 418, 419, 550, 708, 709, 710, 711, 607, 608, 609, 479, 81, 82, 462, 100, 101, 568, 569, 220, 221, 473, 712, 713, 613, 614, 238, 124, 582, 583, 584, 459, 460, 225, 215, 461, 532, 533, 534, 324, 27, 28, 304, 305, 306, 246, 247, 248, 631, 632, 167, 168, 21, 22, 615, 227, 714, 715, 207, 472, 163, 164, 174, 39, 40, 353, 354, 570, 571, 574, 575, 576, 438, 185, 327, 216, 217, 108, 463, 123, 212, 132, 333, 334, 621, 633, 634, 635, 147, 148, 149, 716, 717, 718, 150],
        "Alola": [-1, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 165, 166, 167, 168, 172, 25, 26, 736, 737, 738, 438, 185, 440, 113, 242, 446, 143, 79, 80, 199, 278, 279, 63, 64, 65, 52, 53, 81, 82, 462, 88, 89, 58, 59, 96, 97, 296, 297, 235, 739, 740, 92, 93, 94, 425, 426, 200, 429, 41, 42, 169, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 225, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 339, 340, 66, 67, 68, 524, 525, 526, 703, 302, 744, 745, 327, 72, 73, 456, 457, 746, 370, 222, 747, 748, 90, 91, 371, 372, 373, 506, 507, 508, 133, 134, 135, 136, 196, 197, 470, 471, 700, 749, 750, 174, 39, 40, 128, 241, 283, 284, 751, 752, 753, 754, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 349, 350, 594, 661, 662, 663, 757, 758, 104, 105, 115, 240, 126, 467, 759, 760, 761, 762, 763, 764, 127, 765, 766, 704, 705, 706, 351, 767, 768, 120, 121, 769, 770, 408, 409, 410, 411, 566, 567, 564, 565, 708, 709, 299, 476, 771, 170, 171, 772, 773, 718, 568, 569, 227, 132, 173, 35, 36, 774, 374, 375, 376, 137, 233, 474, 674, 675, 775, 324, 776, 777, 239, 125, 466, 74, 75, 76, 551, 552, 553, 328, 329, 330, 443, 444, 445, 707, 778, 779, 780, 359, 361, 362, 478, 215, 461, 27, 28, 37, 38, 582, 583, 584, 209, 210, 422, 423, 369, 781, 318, 319, 320, 321, 131, 102, 103, 782, 783, 784, 587, 123, 212, 198, 430, 447, 448, 147, 148, 149, 142, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802],
        "Melemele Island": [-1, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 165, 166, 167, 168, 172, 25, 26, 736, 737, 738, 438, 185, 440, 113, 242, 446, 143, 79, 80, 199, 278, 279, 63, 64, 65, 52, 53, 81, 82, 462, 88, 89, 58, 59, 96, 97, 296, 297, 235, 739, 740, 92, 93, 94, 425, 426, 200, 429, 41, 42, 169, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 225, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 339, 340, 66, 67, 68, 524, 525, 526, 703, 302, 744, 745, 327, 72, 73, 456, 457, 746, 370, 222, 747, 748, 90, 91, 371, 372, 373, 785],
        "Akala Island": [-1, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 736, 737, 738, 438, 185, 440, 113, 242, 278, 279, 739, 740, 92, 93, 94, 41, 42, 169, 50, 51, 741, 54, 55, 129, 130, 339, 340, 72, 73, 456, 457, 746, 370, 222, 747, 748, 506, 507, 508, 133, 134, 135, 136, 196, 197, 470, 471, 700, 749, 750, 174, 39, 40, 128, 241, 283, 284, 751, 752, 753, 754, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 349, 350, 594, 661, 662, 663, 757, 758, 104, 105, 115, 240, 126, 467, 759, 760, 761, 762, 763, 764, 127, 765, 766, 704, 705, 706, 351, 767, 768, 120, 121, 769, 770, 408, 409, 410, 411, 566, 567, 564, 565, 708, 709, 299, 476, 771, 170, 171, 786],
        "Ula'ula Island": [-1, 731, 732, 733, 734, 735, 19, 20, 165, 166, 167, 168, 736, 737, 738, 440, 113, 242, 79, 80, 199, 278, 279, 52, 53, 81, 82, 462, 88, 89, 739, 740, 92, 93, 94, 41, 42, 169, 50, 51, 21, 22, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 72, 73, 456, 457, 746, 749, 750, 283, 284, 751, 752, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 704, 705, 706, 351, 568, 569, 227, 132, 173, 35, 36, 774, 374, 375, 376, 137, 233, 474, 674, 675, 775, 324, 776, 777, 239, 125, 466, 74, 75, 76, 551, 552, 553, 328, 329, 330, 443, 444, 445, 707, 778, 779, 780, 359, 361, 362, 478, 215, 461, 27, 28, 37, 38, 582, 583, 584, 787],
        "Poni Island": [-1, 731, 732, 733, 734, 735, 19, 20, 440, 113, 242, 278, 279, 96, 97, 296, 297, 739, 740, 41, 42, 169, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 339, 340, 66, 67, 68, 524, 525, 526, 703, 302, 744, 745, 72, 73, 456, 457, 749, 750, 128, 241, 759, 760, 127, 704, 705, 706, 351, 767, 768, 227, 209, 210, 422, 423, 369, 781, 318, 319, 320, 321, 131, 102, 103, 782, 783, 784, 587, 123, 212, 198, 430, 447, 448, 147, 148, 149, 142, 788],
        "New Alola": [-1, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 165, 166, 167, 168, 427, 428, 686, 687, 570, 571, 676, 172, 25, 26, 736, 737, 738, 438, 185, 440, 113, 242, 446, 143, 79, 80, 199, 278, 279, 63, 64, 65, 52, 53, 81, 82, 462, 88, 89, 439, 122, 23, 24, 206, 58, 59, 96, 97, 296, 297, 235, 739, 740, 92, 93, 94, 425, 426, 198, 430, 41, 42, 169, 714, 715, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 225, 701, 741, 742, 743, 669, 670, 671, 548, 549, 546, 547, 54, 55, 238, 124, 129, 130, 339, 340, 86, 87, 66, 67, 68, 524, 525, 526, 703, 302, 303, 744, 745, 327, 72, 73, 456, 457, 746, 370, 222, 747, 748, 90, 91, 366, 367, 368, 223, 224, 458, 226, 371, 372, 373, 506, 507, 508, 133, 134, 135, 136, 196, 197, 470, 471, 700, 179, 180, 181, 749, 750, 174, 39, 40, 128, 241, 283, 284, 751, 752, 753, 754, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 550, 349, 350, 594, 661, 662, 663, 757, 758, 104, 105, 115, 240, 126, 467, 636, 637, 759, 760, 761, 762, 763, 764, 127, 163, 164, 352, 765, 766, 704, 705, 706, 351, 767, 768, 120, 121, 769, 770, 138, 139, 140, 141, 345, 346, 347, 348, 408, 409, 410, 411, 564, 565, 566, 567, 696, 697, 698, 699, 246, 247, 248, 708, 709, 177, 178, 299, 476, 771, 170, 171, 772, 773, 803, 804, 718, 568, 569, 572, 573, 204, 205, 227, 132, 173, 35, 36, 605, 606, 774, 374, 375, 376, 137, 233, 474, 674, 675, 775, 324, 776, 228, 229, 702, 777, 309, 310, 239, 125, 466, 74, 75, 76, 551, 552, 553, 328, 329, 330, 443, 444, 445, 343, 344, 622, 623, 707, 778, 353, 354, 592, 593, 779, 780, 359, 361, 362, 478, 215, 461, 27, 28, 37, 38, 582, 583, 584, 559, 560, 624, 625, 209, 210, 422, 423, 369, 781, 318, 319, 690, 691, 692, 693, 320, 321, 131, 357, 102, 103, 341, 342, 619, 620, 782, 783, 784, 587, 123, 212, 214, 190, 424, 667, 668, 200, 429, 621, 108, 463, 447, 448, 147, 148, 149, 142, 785, 786, 787, 788, 789, 790, 791, 792, 793, 805, 806, 794, 795, 796, 797, 798, 799, 800, 801, 802, 807],
        "New Melemele Island": [-1, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 165, 166, 167, 168, 427, 428, 686, 687, 570, 571, 676, 172, 25, 26, 736, 737, 738, 438, 185, 440, 113, 242, 446, 143, 79, 80, 199, 278, 279, 63, 64, 65, 52, 53, 81, 82, 462, 88, 89, 439, 122, 23, 24, 206, 58, 59, 96, 97, 296, 297, 235, 739, 740, 92, 93, 94, 425, 426, 198, 430, 41, 42, 169, 714, 715, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 225, 701, 741, 742, 743, 669, 670, 671, 548, 549, 546, 547, 54, 55, 238, 124, 129, 130, 339, 340, 86, 87, 66, 67, 68, 524, 525, 526, 703, 302, 303, 744, 745, 327, 72, 73, 456, 457, 746, 370, 222, 747, 748, 90, 91, 366, 367, 368, 223, 224, 458, 226, 371, 372, 373, 785],
        "New Akala Island": [-1, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 736, 737, 738, 438, 185, 440, 113, 242, 278, 279, 739, 740, 92, 93, 94, 41, 42, 169, 50, 51, 741, 54, 55, 129, 130, 339, 340, 72, 73, 456, 457, 746, 370, 222, 747, 748, 223, 224, 458, 226, 506, 507, 508, 133, 134, 135, 136, 196, 197, 470, 471, 700, 179, 180, 181, 749, 750, 174, 39, 40, 128, 241, 283, 284, 751, 752, 753, 754, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 550, 349, 350, 594, 661, 662, 663, 757, 758, 104, 105, 115, 240, 126, 467, 636, 637, 759, 760, 761, 762, 763, 764, 127, 163, 164, 352, 765, 766, 704, 705, 706, 351, 767, 768, 120, 121, 769, 770, 138, 139, 140, 141, 345, 346, 347, 348, 408, 409, 410, 411, 566, 567, 564, 565, 696, 697, 698, 699, 246, 247, 248, 708, 709, 177, 178, 299, 476, 771, 170, 171, 786],
        "New Ula'ula Island": [-1, 731, 732, 733, 734, 735, 19, 20, 165, 166, 167, 168, 736, 737, 738, 440, 113, 242, 79, 80, 199, 278, 279, 52, 53, 81, 82, 462, 88, 89, 739, 740, 92, 93, 94, 41, 42, 169, 50, 51, 21, 22, 741, 742, 743, 669, 670, 671, 548, 549, 546, 547, 54, 55, 129, 130, 72, 73, 456, 457, 746, 366, 367, 368, 749, 750, 283, 284, 751, 752, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 550, 704, 705, 706, 351, 568, 569, 572, 573, 204, 205, 227, 132, 173, 35, 36, 605, 606, 774, 374, 375, 376, 137, 233, 474, 674, 675, 775, 324, 776, 228, 229, 702, 777, 309, 310, 239, 125, 466, 74, 75, 76, 551, 552, 553, 328, 329, 330, 443, 444, 445, 343, 344, 622, 623, 707, 778, 353, 354, 592, 593, 779, 780, 359, 361, 362, 478, 215, 461, 27, 28, 37, 38, 582, 583, 584, 559, 560, 624, 625, 787],
        "New Poni Island": [-1, 731, 732, 733, 734, 735, 19, 20, 427, 428, 686, 687, 570, 571, 676, 440, 113, 242, 278, 279, 96, 97, 296, 297, 739, 740, 41, 42, 169, 714, 715, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 741, 742, 743, 669, 670, 671, 548, 549, 546, 547, 54, 55, 129, 130, 339, 340, 66, 67, 68, 524, 525, 526, 703, 302, 744, 745, 72, 73, 456, 457, 749, 750, 128, 241, 550, 759, 760, 127, 704, 705, 706, 351, 767, 768, 227, 209, 210, 422, 423, 369, 781, 318, 319, 690, 691, 692, 693, 320, 321, 131, 357, 102, 103, 341, 342, 619, 620, 782, 783, 784, 587, 123, 212, 214, 190, 424, 667, 668, 200, 429, 621, 108, 463, 447, 448, 147, 148, 149, 142, 788],
        "Galar": [-1, 810, 811, 812, 813, 814, 815, 816, 817, 818, 824, 825, 826, 10, 11, 12, 736, 737, 738, 163, 164, 821, 822, 823, 819, 820, 519, 520, 521, 827, 828, 263, 264, 862, 831, 832, 270, 271, 272, 273, 274, 275, 833, 834, 509, 510, 835, 836, 659, 660, 572, 573, 761, 762, 763, 43, 44, 45, 182, 406, 315, 407, 278, 279, 595, 596, 309, 310, 37, 38, 58, 59, 582, 583, 584, 220, 221, 473, 225, 361, 362, 478, 343, 344, 749, 750, 557, 558, 622, 623, 517, 518, 177, 178, 759, 760, 459, 460, 98, 99, 194, 195, 341, 342, 290, 291, 292, 236, 106, 107, 237, 674, 675, 599, 600, 601, 415, 416, 436, 437, 280, 281, 282, 475, 425, 426, 829, 830, 420, 421, 434, 435, 535, 536, 537, 355, 356, 477, 66, 67, 68, 92, 93, 94, 129, 130, 118, 119, 223, 224, 90, 91, 349, 350, 550, 746, 771, 568, 569, 850, 851, 837, 838, 839, 50, 51, 529, 530, 524, 525, 526, 532, 533, 534, 527, 528, 714, 715, 95, 208, 846, 847, 52, 863, 53, 868, 869, 742, 743, 597, 598, 710, 711, 172, 25, 26, 133, 134, 135, 136, 196, 197, 470, 471, 700, 840, 841, 842, 677, 678, 684, 685, 682, 683, 751, 752, 360, 202, 83, 865, 170, 171, 453, 454, 559, 560, 618, 213, 339, 340, 422, 423, 767, 768, 688, 689, 222, 864, 859, 860, 861, 856, 857, 858, 757, 758, 624, 625, 538, 539, 109, 110, 438, 185, 173, 35, 36, 175, 176, 468, 446, 143, 546, 547, 111, 112, 464, 574, 575, 576, 577, 578, 579, 588, 589, 616, 617, 605, 606, 613, 614, 627, 628, 629, 630, 451, 452, 607, 608, 609, 686, 687, 215, 461, 302, 303, 556, 561, 447, 448, 324, 778, 878, 879, 211, 592, 593, 747, 748, 845, 848, 849, 843, 844, 449, 450, 632, 631, 694, 695, 701, 328, 329, 330, 610, 611, 612, 562, 867, 563, 679, 680, 681, 77, 78, 854, 855, 876, 708, 709, 755, 756, 765, 766, 877, 870, 780, 776, 777, 872, 873, 852, 853, 871, 458, 226, 320, 321, 712, 713, 781, 131, 337, 338, 439, 122, 866, 554, 555, 874, 875, 884, 479, 132, 880, 881, 882, 883, 4, 5, 6, 772, 773, 246, 247, 248, 633, 634, 635, 704, 705, 706, 782, 783, 784, 885, 886, 887, 888, 889, 890],
        "Isle of Armor": [-1, 79, 80, 199, 427, 428, 440, 113, 242, 819, 820, 174, 39, 40, 824, 825, 826, 753, 754, 840, 841, 842, 661, 662, 663, 403, 404, 405, 707, 624, 625, 63, 64, 65, 280, 281, 282, 475, 98, 99, 72, 73, 129, 130, 223, 224, 458, 226, 278, 279, 451, 452, 206, 626, 108, 463, 833, 834, 194, 195, 704, 705, 706, 621, 616, 617, 588, 589, 1, 2, 3, 7, 8, 9, 543, 544, 545, 590, 591, 764, 114, 465, 453, 454, 172, 25, 26, 570, 571, 765, 766, 341, 342, 845, 118, 119, 846, 847, 120, 121, 891, 892, 587, 702, 877, 81, 82, 462, 686, 687, 746, 318, 319, 506, 507, 508, 128, 241, 123, 212, 127, 214, 557, 558, 767, 768, 871, 747, 748, 852, 853, 90, 91, 769, 770, 425, 426, 339, 340, 298, 183, 184, 60, 61, 62, 186, 54, 55, 293, 294, 295, 527, 528, 227, 524, 525, 526, 744, 745, 757, 758, 559, 560, 619, 620, 782, 783, 784, 27, 28, 104, 105, 115, 324, 843, 844, 551, 552, 553, 627, 628, 629, 630, 111, 112, 464, 636, 637, 170, 171, 320, 321, 592, 593, 690, 691, 692, 693, 116, 117, 230, 548, 549, 415, 416, 102, 103, 132, 137, 233, 474, 893],
        "Rijon": [228, 229, 214, 193, 469, 167, 168, 170, 171, 220, 221, 473, 177, 178, 179, 180, 181, 183, 184, 198, 430, 246, 247, 248, 231, 232, 194, 195, 175, 176, 468, 207, 472, 215, 461, 236, 237, 200, 429, 196, 197, 470, 471, 462, 466, 467, 233, 474, 465, 212, 208, 199, 230, 464, 242, 169, 186, 243, 244, 245, 249, 250, 408, 409, 700], //starting from 161
        "Beta Naljo": [-1, 246, 247, 248, 371, 372, 373, 152, 153, 154, 155, 156, 157, 158, 159, 160, 403, 404, 405, 361, 362, 478, 74, 75, 76, 41, 42, 169, 16, 17, 18, 270, 271, 272, 207, 472, 10, 11, 12, 276, 277, 280, 281, 282, 475, 161, 162, 331, 332, 63, 64, 65, 174, 39, 40, 46, 47, 37, 38, 177, 178, 179, 180, 181, 436, 437, 193, 469, 133, 134, 135, 136, 196, 197, 470, 471, "Prizmeon", 453, 454, 66, 67, 68, 69, 70, 71, 79, 80, 199, 216, 217, 228, 229, 218, 219, 95, 208, 172, 25, 26, 48, 49, 313, 314, 451, 452, 167, 168, 123, 212, 236, 106, 107, 237, 109, 110, 129, 130, 220, 221, 473, 200, 429, 113, 242, 115, 304, 305, 306, 293, 294, 295, 81, 82, 462, 111, 112, 464, 231, 232, 374, 375, 376, 337, 338, 296, 297, 322, 323, 77, 78, 58, 59, 309, 310, 175, 176, 468, 204, 205, 239, 125, 466, 240, 126, 467, 102, 103, 170, 171, 183, 184, 72, 73, 425, 426, 302, 442, 353, 354, 355, 356, 92, 93, 94, 433, 358, 21, 22, 328, 329, 330, 349, 350, 320, 321, 283, 284, 285, 286, 333, 334, 114, 465, 118, 119, 137, 233, 474, 443, 444, 445, 215, 461, 147, 148, 149, 132, 143, 324, 303, 369, 359, 455, 447, 448, 427, 428, 408, 409, 410, 411, 345, 346, 347, 348, 1, 2, 3, 4, 5, 6, 7, 8, 9, 249, 250, 383, 382, 384, 485, 483, 484],
        "Naljo": [-1, 246, 247, 248, 371, 372, 373, 152, 153, 154, 155, 156, 157, 158, 159, 160, 403, 404, 405, 361, 362, 478, 74, 75, 76, 41, 42, 169, 16, 17, 18, 270, 271, 272, 207, 472, 10, 11, 12, 276, 277, 280, 281, 282, 475, 161, 162, 331, 332, 63, 64, 65, 174, 39, 40, 46, 47, 37, 38, 177, 178, 179, 180, 181, 436, 437, 193, 469, 133, 134, 135, 136, 196, 197, 470, 471, 700, 349, 350, 66, 67, 68, 69, 70, 71, 79, 80, 199, 216, 217, 228, 229, 218, 219, 95, 208, 172, 25, 26, 48, 49, 313, 314, 451, 452, 167, 168, 123, 212, 236, 106, 107, 237, 109, 110, 129, 130, 220, 221, 473, 200, 429, 113, 242, 115, 304, 305, 306, 293, 294, 295, 81, 82, 462, 111, 112, 464, 231, 232, 337, 338, 296, 297, 322, 323, 77, 78, 58, 59, 309, 310, 175, 176, 468, 204, 205, 239, 125, 466, 240, 126, 467, 102, 103, 170, 171, 183, 184, 72, 73, 425, 426, 302, 442, 353, 354, 355, 356, 92, 93, 94, 433, 358, 21, 22, 328, 329, 330, 320, 321, 283, 284, 285, 286, 333, 334, 114, 465, 118, 119, 137, 233, 474, 443, 444, 445, 215, 461, 374, 375, 376, 132, 143, 324, 303, 369, 359, 455, 447, 448, 427, 428, 408, 409, 410, 411, 345, 346, 347, 348, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Phancero", 144, 145, 146, 150, 151, 249, 250, 383, 382, 384, "Varaneous", "Raiwato", "Fambaco", "Libabeel"],
        "Tunod": [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 633, 634, 635, 46, 47, 595, 596, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 501, 502, 503, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 619, 620, 98, 99, 487, 485, 451, 452, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 490, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 611, 612, 179, 180, 181, 610, 183, 184, 185, 186, 187, 188, 189, 190, 559, 560, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 303, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 328, 329, 330, 225, 226, 227, 228, 229, 230, 231, 232, 233, 407, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 495, 496, 497, 470, 469, 387, 388, 389, 390, 391, 392, 276, 277, 278, 279, 280, 281, 282, 638, 639, 285, 286, 498, 499, 500, 290, 291, 292, 483, 404, 405, 492, 471, 481, 570, 447, 448, 302, 646, 304, 305, 306, 472, 473, 309, 310, 644, 643, 430, 461, 482, 453, 454, 443, 444, 640, 647, 466, 467, 571, 403, 484, 327, 445, 488, 491, 395, 480, 474, 475, 335, 336, 494, 100, 463, 464, 419, 462, 424, 468, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 486, 478, 465, 386, 359, 360, 361, 362, 101, 393, 394, 366, 367, 368, 429, 418, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 493, "Pikachu-B", 532, 533, 534, 621, "Kyurem-B", "Kyurem-W", "Mew-B", 650, 651, 652, 653, 654, 655, 656, 657, 658, "M-Venusaur", "M-Charizard X", "M-Blastoise", "M-Lucario", "M-Charizard Y", "M-Salamence", "M-Absol", "M-Manectric"],
        "New Tunod": [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 633, 634, 635, 624, 625, 595, 596, 622, 623, 546, 547, 54, 55, 679, 680, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 501, 502, 503, 86, 87, 690, 691, 90, 91, 92, 93, 94, 95, 619, 620, 543, 544, 487, 485, 451, 452, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 490, 123, 124, 125, 126, 545, 128, 129, 130, 131, 132, "Def-Eevee", 134, 135, 136, 137, 650, 653, 656, 532, 718, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 406, 315, 636, 637, 169, 479, "Rotom-W", 172, 173, 174, 175, 176, 611, 612, 179, 180, 181, 610, 183, 184, 185, 186, 187, 188, 189, 190, 559, 560, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 303, 204, 205, 681, 207, 208, 209, 210, 700, 212, 213, 214, 215, "Rotom-C", "Rotom-H", 708, 709, 220, 221, 704, 705, 706, 225, 226, 227, 228, 229, 230, 231, 232, 233, 407, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 495, 496, 497, 470, 469, 387, 388, 389, 390, 391, 392, 276, 277, 278, 279, 280, 281, 282, 638, 639, 285, 286, 498, 499, 500, 290, 291, 292, 483, 404, 405, 492, 471, 481, 570, 447, 448, 302, 646, 304, 305, 306, 472, 473, 309, 310, 644, 643, 430, 461, 482, 453, 454, 443, 444, 640, 647, 466, 467, 571, 403, 484, 327, 445, 488, 491, 395, 480, 474, 475, 649, 336, 494, "Rotom-F", 463, 464, 419, 462, 424, 468, 716, 717, 347, 348, 349, 350, 351, 352, 353, 354, 486, 478, 465, 386, 359, 360, 361, 362, "Rotom-S", 393, 394, 366, 367, 368, 429, 418, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 493, "Pikachu-B", 141, 533, 534, 621, "Kyurem-B", "Kyurem-W", "Mew-B", 138, 651, 652, 139, 654, 655, 140, 657, 658, "Off-Eevee", 345, 346, "M-Lucario", 142],
        "Kohto": PokeList.map((v, i) => i).filter(i => i <= GenSlice[2]),
        "Flora": [-1, 387, 388, 389, 390, 391, 392, 393, 394, 395, 10, 11, 12, 403, 404, 405, 396, 397, 398, 504, 505, 548, 556, 23, 24, 25, 26, 513, 514, 519, 520, 521, 551, 552, 553, 35, 36, 37, 38, 507, 508, 41, 42, 43, 44, 45, 46, 47, 627, 628, 50, 51, 559, 560, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 636, 637, 573, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 462, 468, 572, 550, 593, 546, 547, 90, 91, 92, 93, 94, 95, 472, 473, 471, 470, 100, 101, 408, 409, 104, 105, 106, 107, 108, 109, 110, 522, 523, 113, 456, 478, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 475, 488, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 449, 450, 493, 143, 483, 487, 477, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 570, 571, 167, 168, 169, 170, 171, 172, 173, 506, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 615, 415, 416, 425, 587, 626, 549, "ShayminSky", 194, 195, 196, 197, 198, 199, 200, 201, 202, 555, 204, 205, 206, 207, 208, 209, 210, 429, 212, 213, 214, 215, 586, 585, 218, 219, 220, 221, 222, 223, 224, 225, 446, 227, 228, 229, 230, 418, 419, 233, 492, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 624, 625, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 443, 444, 445, 430, 467, 278, 279, 280, 281, 282, 461, 426, 285, 286, 287, 288, 289, 290, 291, 292, 633, 634, 635, 447, 448, 298, 299, 300, 301, 563, 303, 304, 305, 306, 307, 308, 309, 310, 451, 452, 474, 442, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 420, 421, 434, 435, 349, 350, 351, 352, 517, 518, 355, 356, 407, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 457, 371, 372, 373, 374, 375, 376, 647, 494, 466, 380, 381, 382, 383, 384, 385, 386],
        "Flora Complement": [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 543, 544, 545, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 459, 460, 595, 596, 27, 28, 29, 30, 31, 32, 33, 34, 417, 531, 37, 38, 39, 40, 527, 528, 540, 541, 542, 632, 455, 48, 49, 529, 530, 52, 53, 619, 620, 538, 539, 412, 413, 414, "Burmy G", "Wormadam G", 574, 575, 576, 532, 533, 534, 69, 70, 71, 613, 614, 568, 569, 582, 583, 584, 410, 411, 597, 598, 83, 84, 85, 86, 87, 88, 89, 588, 589, 92, 93, 94, 471, 96, 97, 98, 99, 100, 101, 102, 103, 449, 450, 447, 448, 108, 463, 115, 111, 112, 464, 114, 465, 116, 117, 230, 128, 120, 121, 439, 122, "Meloetta F", 125, 126, 127, 485, 446, 143, 131, 132, 133, 134, 135, 136, 481, 482, 480, 140, 141, 142, 151, 144, 145, 146, 147, 148, 149, 492, "ShayminSky", 495, 496, 497, 498, 499, 500, 501, 502, 503, 427, 428, 616, 617, 165, 166, 401, 402, 599, 600, 601, 438, 440, 174, 554, 555, 629, 630, 602, 603, 604, 222, 557, 558, 592, 593, 187, 188, 189, 203, 191, 192, 211, 509, 510, 196, 197, 641, 642, 645, 201, 215, 461, 577, 578, 579, 441, 491, 483, 484, 487, 493, 648, 649, 234, 216, 217, 580, 581, 433, 358, 524, 525, 526, 458, 226, 227, 299, 476, 235, 231, 232, 590, 591, 241, 453, 454, 406, 239, 240, 113, 242, 638, 639, 640, 246, 247, 248, 643, 644, 646, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 399, 400, 60, 61, 186, "Burmy S", "Wormadam S", 561, 470, 615, 273, 274, 275, 276, 277, 564, 565, 631, 605, 606, 283, 284, 522, 523, "Aqua Egg", 489, 490, 422, 423, 621, 293, 294, 295, 296, 297, 535, 536, 537, 442, 302, 550, 511, 512, 513, 514, 515, 516, 351, 311, 312, 313, 314, 327, "Shellos 2", "Gastrodon2", 315, 407, 320, 321, 566, 567, 420, 421, 431, 432, 328, 329, 330, 622, 623, 415, 416, 562, 563, 479, "Rotom I", "Rotom F", "Rotom W", "Rotom G", "Rotom H", 436, 437, 345, 346, 347, 348, 349, 350, 618, 359, 353, 354, 607, 608, 609, 357, 193, 469, 185, 190, 424, 466, 467, 610, 611, 612, 370, 594, 371, 372, 373, 251, 249, 486, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386],
        "Altair/Sirius (Hoenn)": [-1, 132, "AA", "AAA", "AAAA", "AAAAA", "AAAAAA", "AAAAAAA", "B", "BB", "BBB", "BBBB", "BBBBB", "BBBBBB", "BBBBBBB", "C", "CC", "CCC", "CCCC", "CCCCC", "CCCCCC", "CCCCCCC", "D", "DD", "DDD", "Pianon", 174, 179, 180, "DDDD", "DDDDD", "DDDDDD", "DDDDDDD", "E", "EE", "EEE", "EEEE", 199, "Violo", 202, 95, "Rotillo", "Toxroach", 52, 53, 431, "EEEEE", "EEEEEE", "EEEEEEE", "F", "FF", "FFF", "FFFF", "FFFFF", 39, 40, "FFFFFF", "FFFFFFF", "G", "GG", "GGG", "GGGG", "GGGGG", 119, 129, 130, "Wisplode", "Plasmox", "Blitzune", "GGGGGG", "GGGGGGG", "H", 72, 73, 67, 68, 324, "HH", "HHH", "HHHH", "HHHHH", 186, "Baizeast", "HHHHHH", 316, 317, "HHHHHHH", "I", 355, 356, "II", "III", "IIII", "IIIII", "IIIIII", "IIIIIII", "J", "JJ", "JJJ", "JJJJ", "Mintch", "Blakjak", "JJJJJ", "JJJJJJ", "JJJJJJJ", "K", "KK", "KKK", "KKKK", 420, 421, 350, 337, "KKKKK", "KKKKKK", "KKKKKKK", 131, 446, 76, "Glachild", 214, "Psycolt", "L", "LL", "LLL", "LLLL", "LLLLL", 442, "LLLLLL", "Frozaiden", "Aurostice", "LLLLLLL", "A", "M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "N", "NN", "NNN", "NNNN", "NNNNN", "NNNNNN", "NNNNNNN", "O", "OO", "OOO", "???????", "??????????", "OOOO", "OOOOO", "OOOOOO", "OOOOOOO", "P", "PP", "PPP", "PPPP", "PPPPP", "PPPPPP", "PPPPPPP", "Q", "QQ", "QQQ", "QQQQ", "QQQQQ", "QQQQQQ", "Cocrogue", "Scimitooth", "Tyranos", "Rumpet", "R", 360, "RR", "RRR", 36, 436, "RRRR", "RRRRR", "RRRRRR", 432, "Liepus", 66, "RRRRRRR", "S", "SS", "SSS", "SSSS", "SSSSS", "SSSSSS", "SSSSSSS", "T", "TT", "TTT", "TTTT", "TTTTT", "TTTTTT", "TTTTTTT", "U", "UU", 35, 437, "UUU", "UUUU", "UUUUU", "UUUUUU", "UUUUUUU", "V", "VV", "VVV", "VVVV", "VVVVV", 349, "VVVVVV", "VVVVVVV", "W", 94, 200, "WW", "WWW", "Grindon", "WWWW", "WWWWW", "WWWWWW", "WWWWWWW", "Mornwing", "X", "XX", 143, "Yucarlia", "Necrosia", "XXX", "XXXX", "XXXXX", "XXXXXX", "XXXXXXX", "Y", "YY", "YYY", "YYYY", "YYYYY", "YYYYYY", "YYYYYYY", "Z", "ZZ", "ZZZ", "ZZZZ", "ZZZZZ", "ZZZZZZ", "ZZZZZZZ", "Nimbleaf", "Leafrond", "Syleafid", "Peyero", "Infiris", "Astignite", "Liquiput", "Hydrush", "Correncid", "Takuni", "Percussoon", 10, 11, 12, 13, 14, 15, 16, 17, 18, 396, 397, 398, "Cupricorn", "Hornikel", "Goabalt", "Cuppa", "Kapwondo", 285, 286, 218, 219, 63, 64, 65, "Dorfin", "Darca", 118, 298, 183, 184, 41, 42, 169, 74, 75, "Lunabitt", 307, 308, "Rollder", "Tentyrant", 100, 101, "Sphericoil", "Willisp", 406, 315, 407, 60, 61, 62, "Maneko", "Bakeko", 88, 89, "Clotaku", "Feroceros", "Jarmit", "Hantama", "Spelven", 92, 93, 429, "Jamberree", "Strawna", 181, "Guldawn", "Solarisen", 128, 191, 192, 359, "Dizasol", 203, "Folifarig", 451, 452, "Snalo", "Serplant", "Velvelt", "Grissly", 172, 25, 26, "Machu", 54, 55, 208, 123, 212, "Kinegasus", "Yunesis", "Lephan", "Ganerth", "Rynos", "Feroceros", 79, 80, 173, 338, "Stellith", 280, 281, 282, 475, "Kirgicia", "Ptervus", "Pteriarch", "Pressie", "Laquagon", "Dragune", "Nostratos", 374, 375, 376, "Lylapse", "Ganimede", "Nemea", 380, 381, 382, 383, 384, "Aldina", "Asphere"]
    };
    Regional["New"] = Regional["Johto"].filter(i => i <= GenSlice[2]);
    Regional["Hoenn"] = Regional["New Hoenn"].filter(i => i <= GenSlice[3]);
    Regional["Sinnoh"] = Regional["Enhanced Sinnoh"].filter((v, i) => i <= 151);
    Regional["Rijon"] = Array.prototype.concat.apply(Regional["National"].filter(i => i <= 160), Regional["Rijon"]);

    Regional["Kohto"][0] = -1;
    Regional["Kohto"][84] = 566; //Archen
    Regional["Kohto"][85] = 567; //Archeops
    Regional["Kohto"][115] = 0; //MissingNo.
    Regional["Kohto"][206] = "Pumbloom";

    //paste the following into console to scrape regional dex from Bulbapedia:
    //var pokemon = [0]; $("table tbody tr").each(function() { var $me = $(this); var t1 = $me.find('td').first().text(); var t2 = $me.find('td + td').first().text(); if (t1) pokemon[parseInt(t1.replace('#',''))] = parseInt(t2.replace('#',''));  }); console.log(JSON.stringify(pokemon));

    export var specialClasses: { [key: string]: string } = {
        "Alola": "alolan",
        "Melemele Island": "alolan",
        "Akala Island": "alolan",
        "Ula'ula Island": "alolan",
        "Poni Island": "alolan",
        "New Alola": "alolan",
        "New Melemele Island": "alolan",
        "New Akala Island": "alolan",
        "New Ula'ula Island": "alolan",
        "New Poni Island": "alolan",
        "Altair/Sirius (Hoenn)": "sirius",
    };

    export var runRestrictions: { [key: string]: string } = {};

    export var alternateNames: { [key: string]: string[] } = {};
}
