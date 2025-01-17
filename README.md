# One-Codebase 🚀

![License](https://img.shields.io/badge/License-Personal%20Use%20License-blue)
![Version](https://img.shields.io/badge/Version-0.1-green)
![Python](https://img.shields.io/badge/Python-3.x-%233776AB)

**One-Codebase** is a Python library designed to help developers generate structured codebase outputs, visualize directory structures, and easily locate files within a project. Whether you're working on a small script or a large-scale project, this library simplifies codebase management and exploration.

---

## Features ✨

- **Directory Structure Visualization**: Generate a clean and readable tree structure of your project's directory.
- **File Content Extraction**: Extract and display the content of files within your project.
- **Customizable Ignore Lists**: Exclude specific files or directories (e.g., `.git`, `__pycache__`) from the output.
- **File Path Search**: Quickly locate and copy the relative path of a specific file within your project.
- **Unicode Support**: Handles file reading with proper encoding (UTF-8 and fallback to Latin-1).

---

## Installation 📦

You can install `one-codebase` using pip:

```bash
pip install one-codebase
```

---

## Usage 🛠️

### 1. Generating a Codebase String

Use the `Prompter` class to generate a structured output of your project's directory and file contents.

```python
from one_codebase import Prompter

# Initialize the Prompter with your project name
prompter = Prompter(project_name="your_project_name")

# Generate the codebase string
codebase_output = prompter.generate_codebase_string()
print(codebase_output)
```

---

## Documentation 📚

For a more detailed guide on how to use this library, including advanced features and examples, please refer to the [official documentation](https://your-documentation-link.com).

---

## Configuration ⚙️

The `Prompter` class and other functions support the following parameters:

- `include_git`: Include `.git` directories in the output (default: `False`).
- `include_pycache`: Include `__pycache__` directories in the output (default: `False`).
- `ignore_items`: A set of file or directory names to exclude from the output.

---

## Contributing 🤝

We welcome contributions! If you'd like to contribute to `one-codebase`, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

Please ensure your code adheres to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License 📜

This project is licensed under the **Personal Use License Agreement**. See the [LICENSE](LICENSE) file for details.

---

## Code of Conduct 📜

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for behavior within our community.

---

## Support 💬

If you have any questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/your-repo/one-codebase) or contact us at [siddharthguptaindianboy@gmail.com](mailto:siddharthguptaindianboy@gmail.com).

---

## Acknowledgments 🙏

- Inspired by the need for better codebase management tools.
- Thanks to the [Contributor Covenant](https://www.contributor-covenant.org/) for the Code of Conduct template.

---

Happy coding! 🎉
