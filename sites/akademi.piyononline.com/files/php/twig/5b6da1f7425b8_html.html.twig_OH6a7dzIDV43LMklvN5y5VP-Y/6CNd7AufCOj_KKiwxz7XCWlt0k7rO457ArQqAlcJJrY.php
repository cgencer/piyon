<?php

/* sites/all/themes/gavias_unix/templates/page/html.html.twig */
class __TwigTemplate_515434a13297aa1c4e3031eae4a88999db0d833ce467fdbe27dfc415514e980e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 40, "set" => 52, "include" => 72);
        $filters = array("raw" => 29, "safe_join" => 30, "clean_class" => 54, "t" => 63);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'set', 'include'),
                array('raw', 'safe_join', 'clean_class', 't'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 26
        echo "<!DOCTYPE html>
<html";
        // line 27
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["html_attributes"] ?? null), "html", null, true));
        echo ">
  <head> 
    <head-placeholder token=\"";
        // line 29
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">
    <title>";
        // line 30
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->safeJoin($this->env, ($context["head_title"] ?? null), " | ")));
        echo "</title>
    <css-placeholder token=\"";
        // line 31
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">

    <js-placeholder token=\"";
        // line 33
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">

    <link rel=\"stylesheet\" href=\"";
        // line 35
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["theme_path"] ?? null), "html", null, true));
        echo "/css/custom.css\" media=\"screen\" />
    <link rel=\"stylesheet\" href=\"";
        // line 36
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["theme_path"] ?? null), "html", null, true));
        echo "/css/update.css\" media=\"screen\" />

    ";
        // line 38
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["links_google_fonts"] ?? null)));
        echo "

    ";
        // line 40
        if (($context["customize_css"] ?? null)) {
            // line 41
            echo "      <style type=\"text/css\">
        ";
            // line 42
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["customize_css"] ?? null)));
            echo "
      </style>
    ";
        }
        // line 45
        echo "
    ";
        // line 46
        if (($context["customize_styles"] ?? null)) {
            // line 47
            echo "      ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["customize_styles"] ?? null)));
            echo "
    ";
        }
        // line 49
        echo "
  </head>

  ";
        // line 52
        $context["body_classes"] = array(0 => ((        // line 53
($context["logged_in"] ?? null)) ? ("logged-in") : ("")), 1 => (( !        // line 54
($context["root_path"] ?? null)) ? ("frontpage") : (("path-" . \Drupal\Component\Utility\Html::getClass(($context["root_path"] ?? null))))), 2 => ((        // line 55
($context["node_type"] ?? null)) ? (("node--type-" . \Drupal\Component\Utility\Html::getClass(($context["node_type"] ?? null)))) : ("")), 3 => ((        // line 56
($context["node_id"] ?? null)) ? (("node-" . \Drupal\Component\Utility\Html::getClass(($context["node_id"] ?? null)))) : ("")));
        // line 59
        echo "
  <body";
        // line 60
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["body_classes"] ?? null)), "method"), "html", null, true));
        echo ">

    <a href=\"#main-content\" class=\"visually-hidden focusable\">
      ";
        // line 63
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Skip to main content")));
        echo "
    </a>
    ";
        // line 65
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_top"] ?? null), "html", null, true));
        echo "
    ";
        // line 66
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page"] ?? null), "html", null, true));
        echo "
    ";
        // line 67
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_bottom"] ?? null), "html", null, true));
        echo "
    <js-bottom-placeholder token=\"";
        // line 68
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\">
    
    ";
        // line 70
        if (($context["addon_template"] ?? null)) {
            // line 71
            echo "      <div class=\"permission-save-";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["save_customize_permission"] ?? null), "html", null, true));
            echo "\">
        ";
            // line 72
            $this->loadTemplate(($context["addon_template"] ?? null), "sites/all/themes/gavias_unix/templates/page/html.html.twig", 72)->display($context);
            // line 73
            echo "      </div>  
    ";
        }
        // line 75
        echo "    
  </body>
</html>
";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/page/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  160 => 75,  156 => 73,  154 => 72,  149 => 71,  147 => 70,  142 => 68,  138 => 67,  134 => 66,  130 => 65,  125 => 63,  119 => 60,  116 => 59,  114 => 56,  113 => 55,  112 => 54,  111 => 53,  110 => 52,  105 => 49,  99 => 47,  97 => 46,  94 => 45,  88 => 42,  85 => 41,  83 => 40,  78 => 38,  73 => 36,  69 => 35,  64 => 33,  59 => 31,  55 => 30,  51 => 29,  46 => 27,  43 => 26,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/page/html.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/page/html.html.twig");
    }
}
