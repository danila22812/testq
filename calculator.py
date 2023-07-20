# Student Grade Calculator


def calculate_average_grade(subjects):
    total_score = 0
    total_weightage = 0

    for subject in subjects:
        score = float(input(f"Enter score for {subject}: "))
        weightage = float(input(f"Enter weightage for {subject}: "))

        total_score += score * weightage
        total_weightage += weightage

    average_grade = total_score / total_weightage
    return average_grade


def main():
    num_subjects = int(input("Enter the number of subjects: "))
    subjects = []

    for i in range(num_subjects):
        subject = input(f"Enter the name of subject {i+1}: ")
        subjects.append(subject)

    average_grade = calculate_average_grade(subjects)
    print(f"\nYour average grade is: {average_grade}")


if __name__ == "__main__":
    main()
