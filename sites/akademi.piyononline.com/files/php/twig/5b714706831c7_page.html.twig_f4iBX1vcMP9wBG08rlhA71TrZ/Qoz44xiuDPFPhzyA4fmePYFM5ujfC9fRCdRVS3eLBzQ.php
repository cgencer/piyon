<?php

/* sites/all/themes/gavias_unix/templates/page/page.html.twig */
class __TwigTemplate_cf6318a07674ef5108cb6f305a150a62f5c94dd4041ec2cd1f1c3a9858a89725 extends Twig_Template
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
        $tags = array("set" => 7, "include" => 9, "if" => 12);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'include', 'if'),
                array(),
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

        // line 7
        $context["has_breadcrumb"] = "";
        // line 8
        echo "<div class=\"body-page gva-body-page\">
\t";
        // line 9
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/preloader.html.twig"), "sites/all/themes/gavias_unix/templates/page/page.html.twig", 9)->display($context);
        // line 10
        echo "   ";
        $this->loadTemplate(($context["header_skin"] ?? null), "sites/all/themes/gavias_unix/templates/page/page.html.twig", 10)->display($context);
        // line 11
        echo "\t
\t";
        // line 12
        if ($this->getAttribute(($context["page"] ?? null), "breadcrumbs", array())) {
            // line 13
            echo "\t\t";
            $context["has_breadcrumb"] = " has-breadcrumb";
            // line 14
            echo "\t\t<div class=\"breadcrumbs\">
\t\t\t";
            // line 15
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "breadcrumbs", array()), "html", null, true));
            echo "
\t\t</div>
\t";
        }
        // line 18
        echo "
\t<div role=\"main\" class=\"main main-page";
        // line 19
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["has_breadcrumb"] ?? null), "html", null, true));
        echo "\">
\t
\t\t<div class=\"clearfix\"></div>
\t\t";
        // line 22
        if ($this->getAttribute(($context["page"] ?? null), "slideshow_content", array())) {
            // line 23
            echo "\t\t\t<div class=\"slideshow_content area\">
\t\t\t\t";
            // line 24
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "slideshow_content", array()), "html", null, true));
            echo "
\t\t\t</div>
\t\t";
        }
        // line 26
        echo "\t

\t\t";
        // line 28
        if ($this->getAttribute(($context["page"] ?? null), "help", array())) {
            // line 29
            echo "\t\t\t<div class=\"help show hidden\">
\t\t\t\t<div class=\"container\">
\t\t\t\t\t<div class=\"content-inner\">
\t\t\t\t\t\t";
            // line 32
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", array()), "html", null, true));
            echo "
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t";
        }
        // line 37
        echo "
\t\t";
        // line 38
        if ($this->getAttribute(($context["page"] ?? null), "fw_before_content", array())) {
            // line 39
            echo "\t\t\t<div class=\"fw-before-content area\">
\t\t\t\t";
            // line 40
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "fw_before_content", array()), "html", null, true));
            echo "
\t\t\t</div>
\t\t";
        }
        // line 43
        echo "\t\t
\t\t<div class=\"clearfix\"></div>
\t\t";
        // line 45
        if ($this->getAttribute(($context["page"] ?? null), "before_content", array())) {
            // line 46
            echo "\t\t\t<div class=\"before_content area\">
\t\t\t\t<div class=\"container\">
\t\t\t\t\t<div class=\"row\">
\t\t\t\t\t\t<div class=\"col-xs-12\">
\t\t\t\t\t\t\t";
            // line 50
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "before_content", array()), "html", null, true));
            echo "
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t";
        }
        // line 56
        echo "\t\t
\t\t<div class=\"clearfix\"></div>
\t\t
\t\t<div id=\"content\" class=\"content content-full\">
\t\t\t<div class=\"container";
        // line 60
        if (((($context["gva_layout"] ?? null) == "fw_sidebar") || (($context["gva_layout"] ?? null) == "fw"))) {
            echo "-full";
        }
        echo " container-bg\">
\t\t\t\t";
        // line 61
        if (((($context["gva_layout"] ?? null) == "fw") || (($context["gva_layout"] ?? null) == "container_no_sidebar"))) {
            echo " 
\t\t\t\t\t";
            // line 62
            $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/main-no-sidebar.html.twig"), "sites/all/themes/gavias_unix/templates/page/page.html.twig", 62)->display($context);
            // line 63
            echo "\t\t\t\t";
        } else {
            // line 64
            echo "\t\t\t\t\t";
            $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/main.html.twig"), "sites/all/themes/gavias_unix/templates/page/page.html.twig", 64)->display($context);
            // line 65
            echo "\t\t\t\t";
        }
        echo "\t
\t\t\t</div>
\t\t</div>

\t\t";
        // line 69
        if ($this->getAttribute(($context["page"] ?? null), "highlighted", array())) {
            // line 70
            echo "\t\t\t<div class=\"highlighted area\">
\t\t\t\t<div class=\"container\">
\t\t\t\t\t";
            // line 72
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "highlighted", array()), "html", null, true));
            echo "
\t\t\t\t</div>
\t\t\t</div>
\t\t";
        }
        // line 76
        echo "
\t\t";
        // line 77
        if ($this->getAttribute(($context["page"] ?? null), "after_content", array())) {
            // line 78
            echo "\t\t\t<div class=\"area after_content\">
\t\t\t\t<div class=\"container-fw\">
\t          \t<div class=\"content-inner\">
\t\t\t\t\t\t ";
            // line 81
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "after_content", array()), "html", null, true));
            echo "
\t          \t</div>
        \t\t</div>
\t\t\t</div>
\t\t";
        }
        // line 86
        echo "\t\t
\t\t";
        // line 87
        if ($this->getAttribute(($context["page"] ?? null), "fw_after_content", array())) {
            // line 88
            echo "\t\t\t<div class=\"fw-before-content area\">
\t\t\t\t";
            // line 89
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "fw_after_content", array()), "html", null, true));
            echo "
\t\t\t</div>
\t\t";
        }
        // line 92
        echo "\t</div>
</div>

";
        // line 95
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/footer.html.twig"), "sites/all/themes/gavias_unix/templates/page/page.html.twig", 95)->display($context);
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  226 => 95,  221 => 92,  215 => 89,  212 => 88,  210 => 87,  207 => 86,  199 => 81,  194 => 78,  192 => 77,  189 => 76,  182 => 72,  178 => 70,  176 => 69,  168 => 65,  165 => 64,  162 => 63,  160 => 62,  156 => 61,  150 => 60,  144 => 56,  135 => 50,  129 => 46,  127 => 45,  123 => 43,  117 => 40,  114 => 39,  112 => 38,  109 => 37,  101 => 32,  96 => 29,  94 => 28,  90 => 26,  84 => 24,  81 => 23,  79 => 22,  73 => 19,  70 => 18,  64 => 15,  61 => 14,  58 => 13,  56 => 12,  53 => 11,  50 => 10,  48 => 9,  45 => 8,  43 => 7,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/page/page.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/page/page.html.twig");
    }
}
